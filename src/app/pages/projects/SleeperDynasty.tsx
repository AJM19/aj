import { useEffect, useState } from 'react';
import PieChart, { PieDataItem } from 'src/app/components/d3/pieChart';
import { getManagerRating } from '../../helpers/sleeper-dynasty/getManagerRating';
import {
  Positions,
  useGetAllNFLPlayersQuery,
  useGetAllTransactionsQuery,
  useGetLeagueRostersQuery,
  useGetLeagueUsersQuery,
  useGetNFLStateQuery,
} from '../../../store/sleeperAPI';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Loader from '../../components/Loader';
import { TeamColors } from '../../keys/teamColors';
import { colors } from '../../styles/styledcomps';
import { SleeperKeys } from '../../keys/sleeper';

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

const DASH_ITEMS = ['ROSTERS', 'STATS', 'BREAKDOWN', 'DRAFT'];

const SleeperDynasty = () => {
  const [currentLeagueId, setCurrentLeaugeId] = useState<string>(
    YEARS[1].value
  );

  const [currentView, setCurrentView] = useState<number>(0);
  const [currentFilter, setCurrentFilter] = useState<Filters | string>(
    'manager_rating'
  );

  const [allTeamData, setAllTeamData] = useState<TeamData[]>();
  const { data: leagueInfo, isFetching: isLeagueFetching } =
    useGetLeagueRostersQuery({
      leagueId: currentLeagueId,
    });
  const { data: allPlayers } = useGetAllNFLPlayersQuery();

  const { data: users, isFetching } = useGetLeagueUsersQuery({
    leagueId: currentLeagueId,
  });
  const { data: NFL, isFetching: isStateFetching } = useGetNFLStateQuery();

  useEffect(() => {
    if (allPlayers && leagueInfo && users && NFL) {
      const replicatedData = users
        .map((user, index) => {
          const playersData = leagueInfo
            .find((team) => team.owner_id === user.user_id)
            ?.players.map((playerID) => ({
              id: playerID,
              position: allPlayers[playerID].position,
              full_name: allPlayers[playerID].full_name,
              team: allPlayers[playerID].team,
              age: allPlayers[playerID].age,
            }));

          if (!playersData) {
            return;
          }

          const avgAge =
            playersData.reduce((total, player) => total + player.age, 0) /
            playersData.length;

          const teamInfo = leagueInfo.find(
            (team) => team.owner_id === user.user_id
          );
          const total_fp = teamInfo?.total_fp;
          const total_pp = teamInfo?.total_pp;

          const teamCounts: { [team: string]: number } = {};

          playersData.forEach((player) => {
            if (teamCounts[player.team]) {
              teamCounts[player.team]++;
            } else {
              teamCounts[player.team] = 1;
            }
          });

          const pieData: PieDataItem[] = Object.entries(teamCounts)
            .map(([name, total]) => ({
              name,
              total,
              color: TeamColors[name],
            }))
            .sort((a, b) => b.total - a.total);

          const teamData = {
            teamName: user.display_name.toUpperCase(),
            players: playersData.sort((a, b) => {
              const positionOrder = { QB: 0, RB: 1, WR: 2, TE: 3, K: 4 };
              return positionOrder[a.position] - positionOrder[b.position];
            }),
            avgAge: avgAge.toFixed(2),
            total_fp: total_fp,
            total_pp: total_pp,
            manager_rating: getManagerRating({
              waiver_budget_used: teamInfo?.waiver_budget_used ?? 0,
              wins: teamInfo?.wins ?? 0,
              total_fp: total_fp ?? 0,
              total_pp: total_pp ?? 0,
              week: NFL.week,
            }),
            pieData,
          };
          return teamData;
        })
        .filter(Boolean);

      replicatedData.sort(
        //@ts-ignore
        (a, b) => b[currentFilter] - a[currentFilter]
      );

      if (currentView === 3) {
        replicatedData.reverse();
      }

      //@ts-ignore
      setAllTeamData(replicatedData);
    }
  }, [allPlayers, leagueInfo, users, currentFilter]);

  useEffect(() => {
    if (currentView === 3) {
      setCurrentFilter('total_pp');
    } else {
      setCurrentFilter('manager_rating');
    }
  }, [currentView]);

  if (
    !leagueInfo ||
    !users ||
    !allPlayers ||
    !allTeamData ||
    isFetching ||
    isLeagueFetching ||
    !NFL
  ) {
    return <Loader />;
  }

  return (
    <Layout>
      <StyledHeader>
        <StyledTitle>Sleeper Dynasty</StyledTitle>
        <YearSelector>
          <p>Year:</p>
          <select
            value={currentLeagueId}
            onChange={(y) => setCurrentLeaugeId(y.target.value)}
          >
            {YEARS.map((year, index) => (
              <option key={index} value={year.value}>
                {year.title}
              </option>
            ))}
          </select>
        </YearSelector>
        <DashboardItems>
          {DASH_ITEMS.map((item, index) => (
            <DashItem
              isActive={currentView === index}
              key={item}
              onClick={() => setCurrentView(index)}
            >
              {item}
            </DashItem>
          ))}
        </DashboardItems>
        {currentView === 1 && (
          <>
            <FilterText>Filters: </FilterText>
            <Dropdown onChange={(x) => setCurrentFilter(x.target.value)}>
              <option value="manager_rating">Manager Rating</option>
              <option value="total_fp">Total Points</option>
              <option value="total_pp">Total Potental Points</option>
              <option value="avgAge">Avg. Age</option>
            </Dropdown>
          </>
        )}
      </StyledHeader>
      <StyledContainer>
        {allTeamData.map((team, index) => (
          <TeamContainer key={index}>
            <TeamName>{team.teamName}</TeamName>
            {currentView === 0 && (
              <div style={{ paddingLeft: '10px' }}>
                {team.players.map((player) => (
                  <PlayerContainer key={player.id} id={player.id}>
                    <PositionText>{player.position}: </PositionText>
                    <PlayerName>{player.full_name}</PlayerName>
                    {player.team && (
                      <NFLText color={TeamColors[player.team]}>
                        {player.team}
                      </NFLText>
                    )}
                  </PlayerContainer>
                ))}
              </div>
            )}
            {currentView === 1 && (
              <StatsContainer>
                <StatText>
                  <b>Manager Rating: </b>
                  {team.manager_rating ?? 'N/A'}
                </StatText>
                <StatText>
                  <b>Avg. Age: </b>
                  {team.avgAge ?? 'N/A'}
                </StatText>
                <StatText>
                  <b>Total Points: </b>
                  {team.total_fp ?? 'N/A'}
                </StatText>
                <StatText>
                  <b>Total Potential Points: </b>
                  {team.total_pp ?? 'N/A'}
                </StatText>
              </StatsContainer>
            )}
            {currentView === 2 && (
              <StatsContainer>
                <NFLText
                  style={{ margin: 0 }}
                  color={TeamColors[team.pieData[0].name]}
                >
                  Most Popular: {team.pieData[0].name}
                </NFLText>
                <label style={{ fontFamily: 'Barlow', fontSize: '12px' }}>
                  (hover for more info)
                </label>
                <PieChart data={team.pieData} />
              </StatsContainer>
            )}
            {currentView === 3 && (
              <StatsContainer>
                <DraftNumber pick={index + 1}>{index + 1}</DraftNumber>
              </StatsContainer>
            )}
          </TeamContainer>
        ))}
      </StyledContainer>
    </Layout>
  );
};

export default SleeperDynasty;

const FilterText = styled.p`
  margin: 0;
  font-family: Barlow;
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

const StatsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 300px;
`;

const StatText = styled.p`
  font-family: Barlow;
  font-size: 24px;
  color: ${colors.darkBlue};
  text-align: center;
`;

const StyledTitle = styled.h1`
  font-family: Barlow;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, 1fr));
  grid-template-rows: repeat(3, 1fr);
  justify-content: center;

  margin: 20px;
  gap: 10px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
`;

const TeamContainer = styled.div`
  border: 3px solid ${colors.darkBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 25px;
  box-shadow: 0px 17px 20px 8px #0000006b;
  width: 100%;

  @media (max-width: 1000px) {
    align-items: center;
  }
`;

const TeamName = styled.label`
  font-family: Barlow;
  color: black;
  font-weight: bold;
  font-size: 22px;
  width: 100%;

  background: ${colors.mainGray};
  border-top-right-radius: 22px;
  border-top-left-radius: 22px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid ${colors.darkBlue};
`;

const PlayerName = styled.p`
  font-family: Barlow;
  color: black;
  font-weight: normal;
  font-size: 18px;
`;

const PositionText = styled.p`
  font-family: Barlow;
  font-size: 18px;
  font-weight: bold;
`;

const NFLText = styled.p<{ color: string }>`
  font-family: Barlow;
  font-weight: bold;
  color: ${({ color }) => color} !important;
`;

const PlayerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;

  width: 100%;
  gap: 5px;
`;

const DashboardItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: white;
  border: 1px solid ${colors.darkBlue};
  width: fit-content;
  border-radius: 10px;
  gap: 10px;
  padding: 5px 10px;
  margin: 0 15px;
  justify-content: center;
`;

const DashItem = styled.button<{ isActive: boolean }>`
  font-size: 18px;
  font-family: Barlow;
  font-weight: bold;
  color:${colors.darkBlue};
  background: white;
  cursor: pointer;
  margin: 0;
  border-radius: 25px;
  border: 1px solid black;

  ${({ isActive }) =>
    isActive &&
    `
      background: ${colors.darkBlue};
      color: white;
  `}}
  
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: sticky;
  top: 0;
  background: #1b7fcc;
  padding-bottom: 15px;
  border-bottom: 2px solid ${colors.darkBlue};

  @media (max-width: 750px) {
    position: relative;
  }
`;

const Dropdown = styled.select`
  border: 1px solid blue;
  font-family: Barlow;
  font-weight: bold;
  width: 200px;
  border-radius: 5px;
`;

const YearSelector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;

  select {
    border: 1px solid ${colors.darkBlue};
    font-family: Barlow;
    font-weight: bold;
    width: 100px;
    border-radius: 5px;
  }

  p {
    margin: 0;
    font-family: Barlow;
    font-size: 18px;
    font-weight: bold;
    color: white;
  }
`;

const DraftNumber = styled.p<{ pick: number }>`
  color: ${({ pick }) =>
    pick <= 3
      ? '#2ab80c'
      : pick <= 5
      ? '#dfdf3e'
      : pick <= 10
      ? '#f0a400'
      : '#c60505fa'};

  font-size: 25px;
  font-weight: bold;
  font-family: Barlow;
`;
