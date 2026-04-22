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
      g: Float
      gs: Float
      mp: Float
      fg: Float
      fga: Float
      fg_pct: Float
      three_p: Float
      three_pa: Float
      three_p_pct: Float
      two_p: Float
      two_pa: Float
      two_p_pct: Float
      efg_pct: Float
      ft: Float
      fta: Float
      ft_pct: Float
      orb: Float
      drb: Float
      trb: Float
      ast: Float
      stl: Float
      blk: Float
      tov: Float
      pf: Float
      pts: Float
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
      cmp: Float
      att: Float
      cmp_pct: Float
      pass_yds: Float
      pass_td: Float
      pass_int: Float
      yards_per_attempt: Float
      passer_rating: Float
      qbr: Float
      sacks: Float
    }

    type MlbPitcherComparisonDataJson implements Node {
      player_name: String
      team: String
      league: String
      seasons: [MlbPitcherSeason]
    }

    type MlbPitcherSeason {
      season: String
      wins: Float
      losses: Float
      era: Float
      ip: Float
      so: Float
      bb: Float
      whip: Float
      fip: Float
      era_plus: Float
      war: Float
      h9: Float
      hr9: Float
      bb9: Float
      so9: Float
      so_per_bb: Float
    }
  `);
};