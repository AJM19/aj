import { Positions } from "src/store/sleeperAPI";

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
    "Comp-Att": string;
    "Net Passing Yards": string;
    "Yards Per Pass Attempt": string;
    "Net Passing Yards Per Game": string;
    "Passing Touchdowns": string;
    "Interceptions": string;
    "Sacks-Yards Lost": string;
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
    "Kickoffs: Total": string;
    "Average Kickoff Return Yards": string;
    "Punt: Total": string;
    "Average Punt Return Yards": string;
    "INT: Total": string;
    "Average Interception Yards": string;
    "Kicking": string;
    "Net Average Punt Yards": string;
    "Punt: Total Yards": string;
    "FG: Good-Attempts": string;
    "Touchback Percentage": string;
    "Penalties": string;
    "Total-Yards": string;
    "Avg. Per Game (YDS)": string;
    "Time of Possession": string;
    "Possession Time Seconds": string;
    "Miscellaneous": string;
    "Fumbles-Lost": string;
    "Turnover Ratio": string;
}

export type PlayerStatsResponse = {
    rushing_td: number;
    reciving_td: number;
    rushing_yds: number;
    receiving_yds: number;
    total_td: number;
    total_yds: number;
    rec_target_share_perc: number | undefined;
    team_td_share_perc: number | null;
}


export type PlayerStatsProps = {
    player_name: string;
    rushing_stats: RushingStats[];
    receiving_stats: ReceivingStats[];
    team_stats: TeamStats[];
    position: Positions;
}


const getPlayerStats = ({ player_name, rushing_stats, receiving_stats, team_stats, position }: PlayerStatsProps) => {
    const player_rushing = rushing_stats.find(ply => ply.Name.includes(player_name));
    const player_receiving = receiving_stats.find(ply => ply.Name.includes(player_name));
    const player_team = team_stats.find(team => team.Team === 'WSH' ? player_name.includes('WAS') : player_name.includes(team.Team));



    if (!player_team || (!player_rushing && !player_receiving) || position === "QB") {
        console.log(`${player_name} no data found`);
        return null;
    }

    const team_attempts = +player_team["Comp-Att"].split('-')[1]

    const player_data: PlayerStatsResponse = {
        rushing_td: player_rushing ? +player_rushing.TD : 0,
        reciving_td: player_receiving ? +player_receiving.TD : 0,
        rushing_yds: player_rushing ? +player_rushing.YDS : 0,
        receiving_yds: player_receiving ? +player_receiving.YDS : 0,
        total_td: +(player_rushing?.TD ?? 0) + +(player_receiving?.TD ?? 0),
        total_yds: +(player_rushing?.YDS ?? 0) + +(player_receiving?.YDS ?? 0),
        rec_target_share_perc: player_receiving && +((+player_receiving.TGTS / +team_attempts * 100).toFixed(0)),
        team_td_share_perc: player_team ? +((((player_receiving ? +player_receiving.TD : 0) + (player_rushing ? +player_rushing.TD : 0)) / +player_team["Total Touchdowns"]) * 100).toFixed(0) : null,
    }

    return player_data;

};

export default getPlayerStats;