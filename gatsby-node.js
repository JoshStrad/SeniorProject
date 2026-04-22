exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type NbaComparisonDataJson implements Node {
      player_name: String
      team: String
      team_slug: String
      league: String
      slug: String
      source_file: String
      meta: NbaComparisonDataJsonMeta
      per_game: [NbaComparisonDataJsonPerGame]
    }

    type NbaComparisonDataJsonMeta {
      position: String
      shoots: String
      draft: String
    }

    type NbaComparisonDataJsonPerGame {
      season: String
      age: String
      team: String
      lg: String
      pos: String
      g: String
      gs: String
      mp: String
      fg: String
      fga: String
      fg_pct: String
      three_p: String
      three_pa: String
      three_p_pct: String
      two_p: String
      two_pa: String
      two_p_pct: String
      efg_pct: String
      ft: String
      fta: String
      ft_pct: String
      orb: String
      drb: String
      trb: String
      ast: String
      stl: String
      blk: String
      tov: String
      pf: String
      pts: String
      awards: String
    }

    type NflQbComparisonDataJson implements Node {
      player_name: String
      team: String
      league: String
      headshot: String
      meta: NflQbMeta
      seasons: [NflQbSeason]
    }

    type NflQbMeta {
      position: String
    }

    type NflQbSeason {
      season: String
      cmp: String
      att: String
      cmp_pct: String
      pass_yds: String
      pass_td: String
      pass_int: String
      yards_per_attempt: String
      passer_rating: String
      qbr: String
      sacks: String
    }

    type MlbPitcherComparisonDataJson implements Node {
      player_name: String
      team: String
      league: String
      seasons: [MlbPitcherSeason]
    }

    type MlbPitcherSeason {
      season: String
      wins: String
      losses: String
      era: String
      ip: String
      so: String
      bb: String
      whip: String
      fip: String
      era_plus: String
      war: String
      h9: String
      hr9: String
      bb9: String
      so9: String
      so_per_bb: String
    }
  `);
};