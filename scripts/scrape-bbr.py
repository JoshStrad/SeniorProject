#!/usr/bin/env python3

import os
import glob
import json
import re
import math

import pandas as pd
from bs4 import BeautifulSoup, Comment

# Paths – tweak if needed
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HTML_DIR = os.path.join(BASE_DIR, "bbr-html")
OUT_DIR = os.path.join(BASE_DIR, "scrapeddata", "nba", "players")

os.makedirs(OUT_DIR, exist_ok=True)

PER_GAME_ID_PATTERN = re.compile(r"^per_game")  # matches per_game, per_game_stats, per_game_stats_post, etc.


def slugify(name: str) -> str:
    """EX. Turn 'Tyrese Maxey' into 'tyrese-maxey'."""
    name = name.strip().lower()
    name = re.sub(r"[^a-z0-9]+", "-", name)
    name = re.sub(r"-+", "-", name).strip("-")
    return name


def extract_per_game_table_html(soup: BeautifulSoup) -> str:
    """
    Try really hard to find a per-game stats table.

    Strategy:
      1) Look for any <table> in the DOM whose id starts with 'per_game'
         (per_game, per_game_stats, per_game_stats_post, etc.).
      2) If not found, scan every HTML comment, parse it, and look for
         a <table> whose id starts with 'per_game' there.
    """

    # 1) Directly in DOM
    table = soup.find("table", id=PER_GAME_ID_PATTERN)
    if table:
        return str(table)

    # 2) Inside comments (Basketball-Reference often hides tables there)
    for comment in soup.find_all(string=lambda t: isinstance(t, Comment)):
        comment_soup = BeautifulSoup(comment, "lxml")
        table = comment_soup.find("table", id=PER_GAME_ID_PATTERN)
        if table:
            return str(table)

    raise ValueError("Could not find any per-game table (id starting with 'per_game') in page")


def extract_label_block_text(soup: BeautifulSoup, label: str):
    """
    Helper to grab text for things like:
      <p><strong>College:</strong> Duke</p>
    Returns everything after the label (':' stripped), or None.
    """
    strong = soup.find("strong", string=lambda s: s and label in s)
    if not strong or not strong.parent:
        return None

    parent_text = strong.parent.get_text(" ", strip=True)
    parts = parent_text.split(":", 1)
    if len(parts) < 2:
        return None
    value = parts[1].strip()
    return value or None


def parse_meta_block(soup: BeautifulSoup) -> dict:
    """
    Extracts meta info about the player:
      - position
      - shoots
      - height
      - weight (lb)
      - birth date (iso + display)
      - birth place
      - college
      - draft info
    """
    meta = {}

    # Position / Shoots
    position_block = extract_label_block_text(soup, "Position:")
    if position_block:
        if "Shoots:" in position_block:
            pos_part, shoots_part = position_block.split("Shoots:", 1)
            meta["position"] = pos_part.strip(" ▪").strip() or None
            meta["shoots"] = shoots_part.strip() or None
        else:
            meta["position"] = position_block

    # College
    college = extract_label_block_text(soup, "College:")
    if college:
        meta["college"] = college

    # Draft
    draft = extract_label_block_text(soup, "Draft:")
    if draft:
        meta["draft"] = draft

    # Birth date + place
    birth_span = soup.find("span", itemprop="birthDate")
    if birth_span:
        meta["birth_date_display"] = birth_span.get_text(strip=True) or None
        meta["birth_date_iso"] = birth_span.get("data-birth") or None

    birth_place_span = soup.find("span", itemprop="birthPlace")
    if birth_place_span:
        meta["birth_place"] = birth_place_span.get_text(" ", strip=True) or None

    # Height
    height_span = soup.find("span", itemprop="height")
    if height_span:
        meta["height"] = height_span.get_text(strip=True) or None

    # Weight
    weight_span = soup.find("span", itemprop="weight")
    if weight_span:
        wtext = weight_span.get_text(strip=True)
        m = re.search(r"(\d+)\s*lb", wtext)
        if m:
            try:
                meta["weight_lb"] = int(m.group(1))
            except ValueError:
                meta["weight_lb"] = None
        else:
            meta["weight_lb"] = None

    return meta


def clean_record_nan(record: dict) -> dict:
    """Convert any NaN-ish float values in a dict to None so JSON is clean."""
    cleaned = {}
    for k, v in record.items():
        if isinstance(v, float) and math.isnan(v):
            cleaned[k] = None
        else:
            cleaned[k] = v
    return cleaned


def parse_player_file(html_path: str) -> dict:
    """Parse one BBR player HTML file into a dict with name + meta + per_game stats."""
    with open(html_path, "r", encoding="utf-8") as f:
        html = f.read()

    soup = BeautifulSoup(html, "lxml")

    # Player name – from breadcrumbs: <div class="breadcrumbs"> ... <strong>Jayson Tatum</strong>
    name_tag = soup.select_one("div.breadcrumbs strong")
    if not name_tag:
        # Fallback – any <h1>
        name_tag = soup.find("h1")
    if not name_tag:
        raise ValueError(f"Could not find player name in {html_path}")
    player_name = name_tag.get_text(strip=True)

    # Meta (position, height, weight, college, draft, etc.)
    meta = parse_meta_block(soup)

    # Per-game table
    per_game_html = extract_per_game_table_html(soup)
    df_list = pd.read_html(per_game_html)
    if not df_list:
        raise ValueError(f"Could not parse per-game table in {html_path}")
    df = df_list[0]

    # Drop Career row etc.
    if "Season" in df.columns:
        df = df[df["Season"] != "Career"]

    # Turn to list-of-dicts then clean NaNs in each record
    raw_records = df.to_dict(orient="records")
    records = [clean_record_nan(r) for r in raw_records]

    player_data = {
        "player_name": player_name,
        "source_file": os.path.basename(html_path),
        "meta": meta,
        "per_game": records,
    }
    return player_data


def main():
    # All bbr-*.html in ALL subdirs of bbr-html/
    pattern = os.path.join(HTML_DIR, "**", "bbr-*.html")
    html_files = sorted(glob.glob(pattern, recursive=True))

    if not html_files:
        print(f"No HTML files found under {HTML_DIR}")
        return

    print(f"Found {len(html_files)} HTML files under {HTML_DIR}")

    for path in html_files:
        try:
            data = parse_player_file(path)
        except Exception as e:
            print(f"[ERROR] {path}: {e}")
            continue

        slug = slugify(data["player_name"])
        out_path = os.path.join(OUT_DIR, f"{slug}.json")

        with open(out_path, "w", encoding="utf-8") as f:
            # allow_nan=True is default, but we've already cleaned them
            json.dump(data, f, indent=2)

        print(f"[OK] {data['player_name']} -> {out_path}")


if __name__ == "__main__":
    main()
