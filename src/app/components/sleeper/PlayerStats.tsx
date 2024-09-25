import getPlayerStats, {
  PlayerStatsProps,
} from 'src/app/helpers/sleeper-dynasty/getPlayerStats';

type Props = {
  data: PlayerStatsProps;
};

const PlayerStats = ({ data }: Props) => {
  console.log('PlayerStats: ', getPlayerStats(data));

  return <div></div>;
};

export default PlayerStats;
