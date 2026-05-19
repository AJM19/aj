import { useEffect, useState } from 'react';
import PieChart, { PieDataItem } from 'src/app/components/d3/pieChart';
import { getManagerRating } from '../../helpers/sleeper-dynasty/getManagerRating';
import {
  Positions,
  useGetAllNFLPlayersQuery,
  useGetLeagueRostersQuery,
  useGetLeagueUsersQuery,
  useGetNFLStateQuery,
} from '../../../store/sleeperAPI';
import styled from 'styled-components';
import { ProjectPage } from '../../components/ProjectPage';
import Loader from '../../components/Loader';
import { TeamColors } from '../../keys/teamColors';
import { SleeperKeys } from '../../keys/sleeper';
import team_stats from '../../helpers/sleeper-dynasty/espn/nfl_team_stats.json';
import rushing_stats from '../../helpers/sleeper-dynasty/espn/nfl_rushing_stats.json';
import receiving_stats from '../../helpers/sleeper-dynasty/espn/nfl_receiving_stats.json';
import PlayerStats from 'src/app/components/sleeper/PlayerStats';
import getPlayerStats from 'src/app/helpers/sleeper-dynasty/getPlayerStats';
import { fontFamily, fontSize, motion, space, weight } from '../../styles/tokens';

type TeamData = {
  teamName: string;
  players: {
    id: string;
    position: Positions;
    full_name: string;
    team: string;
    age: number;
  }[];
  avgAge: string;
  total_pp: number;
  total_fp: number;
  manager_rating: number;
  pieData: PieDataItem[];
};

type Filters = 'manager_rating' | 'total_pp' | 'total_fp' | 'avgAge';

const YEARS = [
  { title: '2023', value: SleeperKeys.leagueId_2023 },
  { title: '2024', value: SleeperKeys.leagueId_2024 },
];

const DASH_ITEMS = ['rosters', 'stats', 'breakdown', 'draft'];

const SleeperDynasty = () => {
  const [currentLeagueId, setCurrentLeaugeId] = useState<string>(YEARS[1].value);
  const [currentView, setCurrentView] = useState<number>(0);
  const [currentFilter, setCurrentFilter] = useState<Filters | string>('manager_rating');
  const [allTeamData, setAllTeamData] = useState<TeamData[]>();

  const { data: leagueInfo, isFetching: isLeagueFetching } = useGetLeagueRostersQuery({
    leagueId: currentLeagueId,
  });
  const { data: allPlayers } = useGetAllNFLPlayersQuery();
  const { data: users, isFetching } = useGetLeagueUsersQuery({
    leagueId: currentLeagueId,
  });
  const { data: NFL } = useGetNFLStateQuery();

  useEffect(() => {
    if (allPlayers && leagueInfo && users && NFL) {
      const replicatedData = users
        .map((user) => {
          const playersData = leagueInfo
            .find((team) => team.owner_id === user.user_id)
            ?.players.map((playerID) => ({
              id: playerID,
              position: allPlayers[playerID].position,
              full_name: allPlayers[playerID].full_name,
              team: allPlayers[playerID].team,
              age: allPlayers[playerID].age,
            }));

          if (!playersData) return;

          const avgAge =
            playersData.reduce((total, player) => total + player.age, 0) /
            playersData.length;
          const teamInfo = leagueInfo.find((team) => team.owner_id === user.user_id);
          const total_fp = teamInfo?.total_fp;
          const total_pp = teamInfo?.total_pp;

          const teamCounts: { [team: string]: number } = {};
          playersData.forEach((player) => {
            teamCounts[player.team] = (teamCounts[player.team] ?? 0) + 1;
          });

          const pieData: PieDataItem[] = Object.entries(teamCounts)
            .map(([name, total]) => ({ name, total, color: TeamColors[name] }))
            .sort((a, b) => b.total - a.total);

          return {
            teamName: user.display_name.toUpperCase(),
            players: playersData.sort((a, b) => {
              const positionOrder = { QB: 0, RB: 1, WR: 2, TE: 3, K: 4 };
              return positionOrder[a.position] - positionOrder[b.position];
            }),
            avgAge: avgAge.toFixed(2),
            total_fp,
            total_pp,
            manager_rating: getManagerRating({
              waiver_budget_used: teamInfo?.waiver_budget_used ?? 0,
              wins: teamInfo?.wins ?? 0,
              total_fp: total_fp ?? 0,
              total_pp: total_pp ?? 0,
              week: NFL.week,
            }),
            pieData,
          };
        })
        .filter(Boolean);

      replicatedData.sort(
        //@ts-ignore
        (a, b) => b[currentFilter] - a[currentFilter]
      );

      if (currentView === 3) replicatedData.reverse();

      //@ts-ignore
      setAllTeamData(replicatedData);
    }
  }, [allPlayers, leagueInfo, users, currentFilter, NFL, currentView]);

  useEffect(() => {
    setCurrentFilter(currentView === 3 ? 'total_pp' : 'manager_rating');
  }, [currentView]);

  if (!leagueInfo || !users || !allPlayers || !allTeamData || isFetching || isLeagueFetching || !NFL) {
    return <Loader />;
  }

  return (
    <ProjectPage
      eyebrow="project"
      title="Fantasy Football"
      year="2024"
      lede="Pulls roster and matchup data from the Sleeper API to surface weekly trends and league-level analytics for my dynasty league."
    >
      <Controls>
        <YearSelect>
          <Label>year</Label>
          <Select
            value={currentLeagueId}
            onChange={(y) => setCurrentLeaugeId(y.target.value)}
          >
            {YEARS.map((year) => (
              <option key={year.value} value={year.value}>
                {year.title}
              </option>
            ))}
          </Select>
        </YearSelect>

        <Tabs>
          {DASH_ITEMS.map((item, index) => (
            <Tab
              key={item}
              $active={currentView === index}
              onClick={() => setCurrentView(index)}
            >
              {item}
            </Tab>
          ))}
        </Tabs>

        {currentView === 1 && (
          <YearSelect>
            <Label>filter</Label>
            <Select onChange={(x) => setCurrentFilter(x.target.value)}>
              <option value="manager_rating">manager rating</option>
              <option value="total_fp">total points</option>
              <option value="total_pp">total potential points</option>
              <option value="avgAge">avg age</option>
            </Select>
          </YearSelect>
        )}
      </Controls>

      <Grid>
        {allTeamData.map((team, index) => (
          <TeamCard key={index}>
            <TeamName>{team.teamName}</TeamName>
            {currentView === 0 && (
              <PlayersList>
                {team.players.map((player) => (
                  <PlayerCard
                    key={player.id}
                    $hasStats={
                      !!getPlayerStats({
                        team_stats,
                        rushing_stats,
                        receiving_stats,
                        player_name: player.full_name + player.team,
                        position: player.position,
                      })
                    }
                  >
                    <PlayerRow>
                      <Position>{player.position}</Position>
                      <PlayerName>{player.full_name}</PlayerName>
                      {player.team && (
                        <NFLTag $color={TeamColors[player.team]}>
                          {player.team}
                        </NFLTag>
                      )}
                    </PlayerRow>
                    <PlayerStats
                      data={{
                        team_stats,
                        rushing_stats,
                        receiving_stats,
                        player_name: `${player.full_name}${player.team}`,
                        position: player.position,
                      }}
                    />
                  </PlayerCard>
                ))}
              </PlayersList>
            )}
            {currentView === 1 && (
              <StatsBlock>
                <Stat>
                  <StatLabel>manager rating</StatLabel>
                  <StatValue>{team.manager_rating ?? '—'}</StatValue>
                </Stat>
                <Stat>
                  <StatLabel>avg age</StatLabel>
                  <StatValue>{team.avgAge ?? '—'}</StatValue>
                </Stat>
                <Stat>
                  <StatLabel>total points</StatLabel>
                  <StatValue>{team.total_fp ?? '—'}</StatValue>
                </Stat>
                <Stat>
                  <StatLabel>potential points</StatLabel>
                  <StatValue>{team.total_pp ?? '—'}</StatValue>
                </Stat>
              </StatsBlock>
            )}
            {currentView === 2 && (
              <StatsBlock>
                <NFLTag $color={TeamColors[team.pieData[0].name]}>
                  most popular · {team.pieData[0].name}
                </NFLTag>
                <Hint>hover for breakdown</Hint>
                <PieChart data={team.pieData} />
              </StatsBlock>
            )}
            {currentView === 3 && (
              <DraftPickWrap>
                <DraftPick $pick={index + 1}>{index + 1}</DraftPick>
                <Label>pick</Label>
              </DraftPickWrap>
            )}
          </TeamCard>
        ))}
      </Grid>
    </ProjectPage>
  );
};

export default SleeperDynasty;

const Controls = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: ${space['3']};
  padding-bottom: ${space['4']};
  border-bottom: 1px solid ${({ theme }) => theme.rule};
  margin-bottom: ${space['4']};
`;

const YearSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space['0_5']};
`;

const Label = styled.span`
  font-family: ${fontFamily.mono};
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.fgMuted};
`;

const Select = styled.select`
  height: 36px;
  background: transparent;
  color: ${({ theme }) => theme.fg};
  border: 1px solid ${({ theme }) => theme.ruleStrong};
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.sm};
  padding: 0 ${space['1_5']};
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
  }
`;

const Tabs = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.ruleStrong};
`;

const Tab = styled.button<{ $active: boolean }>`
  height: 36px;
  padding: 0 ${space['2']};
  background: ${({ theme, $active }) => ($active ? theme.accent : 'transparent')};
  color: ${({ theme, $active }) => ($active ? theme.accentFg : theme.fg)};
  border: none;
  border-right: 1px solid ${({ theme }) => theme.ruleStrong};
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.sm};
  cursor: pointer;
  transition: background ${motion.base} ${motion.ease}, color ${motion.base} ${motion.ease};

  &:last-child { border-right: none; }
  &:hover {
    color: ${({ theme, $active }) => ($active ? theme.accentFg : theme.accent)};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: ${space['2']};
`;

const TeamCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.rule};
  background: ${({ theme }) => theme.bgElevated};
  min-height: 200px;
`;

const TeamName = styled.div`
  padding: ${space['1_5']} ${space['2']};
  border-bottom: 1px solid ${({ theme }) => theme.rule};
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.sm};
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.fg};
`;

const PlayersList = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${space['1']} 0;
`;

const PlayerCard = styled.div<{ $hasStats: boolean }>`
  overflow: hidden;
  ${({ $hasStats }) =>
    $hasStats &&
    `
      cursor: pointer;
      transition: background 200ms ease;
      :hover {
        background: rgba(255,255,255,0.03);
      }
  `}
`;

const PlayerRow = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr auto;
  align-items: center;
  gap: ${space['1']};
  padding: ${space['1']} ${space['2']};
`;

const Position = styled.span`
  font-family: ${fontFamily.mono};
  font-size: 11px;
  font-weight: ${weight.bold};
  color: ${({ theme }) => theme.fgMuted};
`;

const PlayerName = styled.span`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize.sm};
  color: ${({ theme }) => theme.fg};
`;

const NFLTag = styled.span<{ $color: string }>`
  font-family: ${fontFamily.mono};
  font-size: 10px;
  font-weight: ${weight.bold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ $color }) => $color || 'inherit'};
`;

const StatsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space['1']};
  padding: ${space['2']};
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: ${space['1']} 0;
  border-bottom: 1px solid ${({ theme }) => theme.rule};
  &:last-child { border-bottom: none; }
`;

const StatLabel = styled.span`
  font-family: ${fontFamily.mono};
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.fgMuted};
`;

const StatValue = styled.span`
  font-family: ${fontFamily.display};
  font-size: ${fontSize.xl};
  font-weight: ${weight.semibold};
  color: ${({ theme }) => theme.fg};
`;

const Hint = styled.span`
  font-family: ${fontFamily.mono};
  font-size: 11px;
  color: ${({ theme }) => theme.fgFaint};
`;

const DraftPickWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${space['4']};
  gap: ${space['1']};
`;

const DraftPick = styled.span<{ $pick: number }>`
  font-family: ${fontFamily.display};
  font-size: 64px;
  font-weight: ${weight.bold};
  color: ${({ $pick, theme }) =>
    $pick <= 3
      ? '#2ab80c'
      : $pick <= 5
      ? '#dfdf3e'
      : $pick <= 10
      ? '#f0a400'
      : theme.accent};
`;
