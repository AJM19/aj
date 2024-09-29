import COLORS from '../../styles/colors';
import getPlayerStats, {
  PlayerStatsProps,
} from '../../helpers/sleeper-dynasty/getPlayerStats';
import styled from 'styled-components';

type Props = {
  data: PlayerStatsProps;
};

const KEY = {
  rushing_td: 'RUSH TD',
  reciving_td: 'REC TD',
  rushing_yds: 'RUSH YDS',
  receiving_yds: 'REC YDS',
  total_td: 'TOT TD',
  total_yds: 'TOT YDS',
  rec_target_share_perc: 'REC TGT%',
  team_td_share_perc: 'TEAM TD%',
};

const PlayerStats = ({ data }: Props) => {
  const playerStats = getPlayerStats(data);

  if (!playerStats) {
    return null;
  }

  return (
    <PlayerStatsContainer>
      {Object.entries(playerStats).map((stat, index) => (
        <StatContainer>
          <label>{KEY[stat[0]]}</label>
          <p>
            {stat[1]}
            {index > 5 && '%'}
          </p>
        </StatContainer>
      ))}
    </PlayerStatsContainer>
  );
};

export default PlayerStats;

const PlayerStatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);

  column-gap: 5px;

  border: 1px solid ${COLORS.darkBlue};

  border-radius: 10px;
`;

const StatContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;

  align-items: center;
  justify-content: center;

  text-align: center;

  label {
    font-family: Barlow;
    font-size: 12px;
    font-weight: bold;
    color: ${COLORS.darkBlue};
  }

  p {
    font-family: Barlow;
    font-size: 12px;
    font-weight: normal;
    color: ${COLORS.darkBlue};
  }
`;
