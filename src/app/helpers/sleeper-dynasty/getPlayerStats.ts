type RushingStats = {
    Name: string;
    ATT: string;
    AVG: string;
    BIG: string;
    FD: string;
    FUM: string;
    GP: string;
    LNG: string;
    LST: string;
    POS: string;
    TD: string;
    YDS: string;
    'YDS/G': string;
}

type ReceivingStats = {
    Name: string;
    AVG: string;
    BIG: string;
    FD: string;
    FUM: string;
    GP: string;
    LNG: string;
    LST: string;
    POS: string;
    REC: string;
    TGTS: string;
    YAC: string;
    TD: string;
    YDS: string;
    'YDS/G': string;
}

type TeamStats = {
    Team: string;
    "Total Points Per Game": string;
    "Total Points": string;
    "Total Touchdowns": string;
    "1st Downs": string;
    "Total 1st downs": string;
    "Rushing 1st downs": string;
    "Passing 1st downs": string;
    "1st downs by penalty": string;
    "3rd down efficiency": string;
    "3rd down %": string;
    "4th down efficiency": string;
    "4th down %": string;
    "Passing": string;
    "Comp-Att": string; // Completions - Attempts
    "Net Passing Yards": string;
    "Yards Per Pass Attempt": string;
    "Net Passing Yards Per Game": string;
    "Passing Touchdowns": string;
    "Interceptions": string;
    "Sacks-Yards Lost": string; // Sacks - Yards Lost
    "Rushing": string;
    "Rushing Attempts": string;
    "Rushing Yards": string;
    "Yards Per Rush Attempt": string;
    "Rushing Yards Per Game": string;
    "Rushing Touchdowns": string;
    "Offense": string;
    "Total Offensive Plays": string;
    "Total Yards": string;
    "Yards Per Game": string;
    "Returns": string;
    "Kickoffs: Total": string; // Kickoffs: Total
    "Average Kickoff Return Yards": string;
    "Punt: Total": string; // Punt: Total
    "Average Punt Return Yards": string;
    "INT: Total": string; // INT: Total
    "Average Interception Yards": string;
    "Kicking": string;
    "Net Average Punt Yards": string;
    "Punt: Total Yards": string; // Punt: Total Yards
    "FG: Good-Attempts": string; // FG: Good-Attempts
    "Touchback Percentage": string;
    "Penalties": string;
    "Total-Yards": string; // Total-Yards
    "Avg. Per Game (YDS)": string; // Avg. Per Game (YDS)
    "Time of Possession": string;
    "Possession Time Seconds": string;
    "Miscellaneous": string;
    "Fumbles-Lost": string; // Fumbles-Lost
    "Turnover Ratio": string;
}


export type PlayerStatsProps = {
    player_name: string; rushing_stats: RushingStats[]; receiving_stats: ReceivingStats[]; team_stats: TeamStats[];
}

const getPlayerStats = ({ player_name, rushing_stats, receiving_stats, team_stats }: PlayerStatsProps) => {
    const player_rushing = rushing_stats.find(ply => ply.Name.includes(player_name));
    const player_receiving = receiving_stats.find(ply => ply.Name.includes(player_name));
    const player_team = team_stats.find(team => player_name.includes(team.Team))


    if (!player_team) {
        return 'N/A';
    }

    const team_attempts = +player_team["Comp-Att"].split('-')[1]

    const player_data = {
        name: player_name.replace(player_team.Team, ''),
        rushing_td: player_rushing ? +player_rushing.TD : 0,
        reciving_td: player_receiving ? +player_receiving.TD : 0,
        rushing_yds: player_rushing ? +player_rushing.YDS : 0,
        receiving_yds: player_receiving ? +player_receiving.YDS : 0,
        total_td: +(player_rushing?.TD ?? 0) + +(player_receiving?.TD ?? 0),
        total_yds: +(player_rushing?.YDS ?? 0) + +(player_receiving?.YDS ?? 0),
        rec_target_share: player_receiving && +((+player_receiving.TGTS / +team_attempts * 100).toFixed(0)),
        yac: player_receiving && +player_receiving.YAC
    }

    return player_data;

};

export default getPlayerStats;