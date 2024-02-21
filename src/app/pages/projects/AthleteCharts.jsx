import { useState } from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import {
  BodyText,
  colors,
  FlexColumn,
  FlexRow,
} from '../../styles/styledcomps';
import SearchBar from '../../components/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPlayerByName,
  athleteSelectors,
} from '../../../store/athlete.slice';
import { athleteActions } from '../../../store/athlete.slice';
import BarChart from '../../components/d3/barChart';
import Modal from '../../components/Modal';

const AthleteCharts = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const [athlete1, setAthlete1] = useState();
  const [athlete2, setAthlete2] = useState();
  const [isModalOpen, setModalOpen] = useState(true);

  const [isChartViewShowing, setChartViewShowing] = useState(false);

  const players = useSelector(athleteSelectors.getAllPlayers);
  const error = useSelector(athleteSelectors.getError);
  const loadingStatus = useSelector(athleteSelectors.getLoadingStatus);

  const searchPlayer = async () => {
    if (value !== '') {
      dispatch(await athleteActions.clearPlayers());
      dispatch(await fetchPlayerByName(value));
    }
  };

  const calculateAge = (date) => {
    var ageDifMs = Date.now() - date.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const clearPlayers = async () => {
    dispatch(athleteActions.clearPlayers());
  };

  const resetSelections = async () => {
    setAthlete1();
    setAthlete2();
    dispatch(await athleteActions.clearPlayers());
  };

  const getAthleteById = (id) => {
    return players.find((player) => player.id === id);
  };

  const selectAthlete = (id) => {
    if (!athlete1) {
      setAthlete1(getAthleteById(id));
    } else if (!athlete2) {
      setAthlete2(getAthleteById(id));
    }
  };

  return (
    <Layout>
      <Modal
        isOpen={isModalOpen}
        closeModal={() => {
          setModalOpen(false);
        }}
        content={
          <FlexColumn alignItems="center" gap="20px">
            <BodyText color="red">DISCLAIMER</BodyText>
            <BodyText color={colors.darkBlue}>
              All information is being fetched from a Public API, which does not
              have entirely accurate information for all athletes.
            </BodyText>
            <BodyText color={colors.darkBlue}>
              Most accurate results will be from choosing 2 soccer players.
              Start searching!
            </BodyText>
          </FlexColumn>
        }
      />
      <TopSectionContainer>
        <FlexColumn gap="5px" width="100%">
          {error && <StyledError>{error}</StyledError>}
          <FlexRow gap="5px">
            <SearchBar
              placeholder={'Search by Last Name'}
              enterToggle={searchPlayer}
              setValue={setValue}
            />
            <SearchButton isActive={value !== ''} onClick={searchPlayer}>
              Search
            </SearchButton>
            <ClearButton isActive={players.length > 0} onClick={clearPlayers}>
              Clear
            </ClearButton>
          </FlexRow>
          <AthleteList>
            {loadingStatus !== 'loading' ? (
              players.length > 0 ? (
                players.map((player) => (
                  <AthleteTile key={player.id}>
                    <BodyText weight="bold" color={colors.mainBlue}>
                      {player.name}
                    </BodyText>
                    <SelectButton
                      isActive={!athlete1 || !athlete2}
                      onClick={() => {
                        selectAthlete(player.id);
                      }}
                    >
                      Select
                    </SelectButton>
                  </AthleteTile>
                ))
              ) : (
                <BodyText>No Players</BodyText>
              )
            ) : (
              <BodyText>Loading...</BodyText>
            )}
          </AthleteList>
        </FlexColumn>
      </TopSectionContainer>
      <PlayerContainer isChartViewShowing={isChartViewShowing}>
        {!isChartViewShowing ? (
          <>
            {athlete1 && (
              <PlayerProfileTile id="athlete1">
                <PlayerTitle> {athlete1.name}</PlayerTitle>
                <StyledImage
                  src={athlete1.imageLink}
                  alt={`${athlete1.name}_image`}
                />
                <FlexRow>
                  <BodyText>Age:&nbsp;</BodyText>
                  <PlayerDetails>
                    {calculateAge(new Date(athlete1.DOB))}
                  </PlayerDetails>
                </FlexRow>
                <FlexRow>
                  <BodyText>Team: &nbsp;</BodyText>
                  <PlayerDetails>{athlete1.teamName}</PlayerDetails>
                </FlexRow>
                <FlexRow>
                  <BodyText>Position:&nbsp;</BodyText>
                  <PlayerDetails>{athlete1.position}</PlayerDetails>
                </FlexRow>
                <FlexRow>
                  <BodyText>Height:&nbsp;</BodyText>
                  <PlayerDetails>{athlete1.height}</PlayerDetails>
                </FlexRow>
              </PlayerProfileTile>
            )}
            {athlete1 && athlete2 && (
              <FlexColumn gap="5px">
                <SelectButton onClick={resetSelections} isActive={true}>
                  Reset
                </SelectButton>
                <SelectButton
                  onClick={() => {
                    setChartViewShowing(true);
                  }}
                  isActive={true}
                >
                  Compare
                </SelectButton>
              </FlexColumn>
            )}
            {athlete2 && (
              <PlayerProfileTile id="athlete2">
                <PlayerTitle> {athlete2.name}</PlayerTitle>
                <StyledImage
                  src={athlete2.imageLink}
                  alt={`${athlete2.name}_image`}
                />
                <FlexRow>
                  <BodyText>Age:&nbsp;</BodyText>
                  <PlayerDetails>
                    {calculateAge(new Date(athlete2.DOB))}
                  </PlayerDetails>
                </FlexRow>
                <FlexRow>
                  <BodyText>Team:&nbsp;</BodyText>
                  <PlayerDetails>{athlete2.teamName}</PlayerDetails>
                </FlexRow>
                <FlexRow>
                  <BodyText>Position:&nbsp;</BodyText>
                  <PlayerDetails>{athlete2.position}</PlayerDetails>
                </FlexRow>
                <FlexRow>
                  <BodyText>Height:&nbsp;</BodyText>
                  <PlayerDetails>{athlete2.height}</PlayerDetails>
                </FlexRow>
              </PlayerProfileTile>
            )}
          </>
        ) : (
          <>
            <ChartContainer>
              <ViewButton
                onClick={() => {
                  setChartViewShowing(false);
                }}
              >
                Regular View
              </ViewButton>
              <BarChart
                data={[
                  { x: athlete1.name, y: calculateAge(new Date(athlete1.DOB)) },
                  { x: athlete2.name, y: calculateAge(new Date(athlete2.DOB)) },
                ]}
                barColor={colors.darkBlue}
                minValue={0}
                maxValue={90}
                tick={10}
                title={'Age'}
                caption={' yrs'}
              />
            </ChartContainer>
            <ChartContainer>
              <BarChart
                data={[
                  { x: athlete1.name, y: athlete1.weight },
                  { x: athlete2.name, y: athlete2.weight },
                ]}
                barColor={colors.darkBlue}
                minValue={0}
                maxValue={300}
                tick={10}
                title={'Weight'}
                caption={' lbs'}
              />
            </ChartContainer>
          </>
        )}
      </PlayerContainer>
    </Layout>
  );
};

export default AthleteCharts;

const PlayerContainer = styled.div`
  position: relative;
  height: 70%;
  width: 90%;
  background: white;
  display: grid;
  grid-template-columns: 40% 10% 40%;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: 10px;
  margin-bottom: 25px;
  gap: 25px;
  padding: 0 15px;
  justify-items: center;

  ${({ isChartViewShowing }) =>
    isChartViewShowing &&
    `  
       grid-template-columns: repeat(2,1fr);
  `}
`;

const TopSectionContainer = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  background: white;
  border-radius: 10px;
  margin: 10px auto;
  border: 3px solid ${colors.darkBlue};
  padding-top: 15px;
  align-items: flex-start;
  padding: 10px 15px;
`;

const SearchButton = styled.button`
  display: flex;
  width: 100px;
  height: 25px;
  border-radius: 25px;
  color: white;
  background: ${colors.darkBlue};

  justify-content: center;
  align-items: center;
  font-family: Barlow;

  font-weight: bold;
  border: 1px solid white;
  border: 1px solid transparent;

  :hover {
    color: ${colors.darkBlue};
    background: ${colors.mainBlue};
    border: 1px solid ${colors.darkBlue};
  }

  ${({ isActive }) =>
    !isActive &&
    `  
      opacity: 0.5;
      pointer-events: none;
  `};
`;

const ClearButton = styled.button`
  display: flex;
  width: 100px;
  height: 25px;
  border-radius: 25px;
  color: white;
  background: #bf5353;

  justify-content: center;
  align-items: center;
  font-family: Barlow;

  font-weight: bold;
  border: 1px solid white;
  border: 1px solid transparent;

  :hover {
    color: #bf5353;
    background: white;
    border: 1px solid #bf5353;
  }

  ${({ isActive }) =>
    !isActive &&
    `  
      opacity: 0.5;
      pointer-events: none;
  `};
`;

const ViewButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;

  display: flex;
  width: fit-content;
  height: 25px;
  border-radius: 25px;
  color: white;
  background: ${colors.darkBlue};

  justify-content: center;
  align-items: center;
  font-family: Barlow;

  font-weight: bold;
  border: 1px solid white;
  border: 1px solid transparent;

  :hover {
    color: ${colors.darkBlue};
    background: white;
    border: 1px solid ${colors.darkBlue};
  }
`;

const StyledError = styled.p`
  font-size: 8px;
  color: red;
  font-family: Barlow;
  font-weight: bold;
  margin: 0;
`;

const AthleteTile = styled.div`
  display: flex;
  border-top: 1px dashed ${colors.darkBlue};
  border-bottom: 1px dashed ${colors.darkBlue};
  justify-content: space-between;
  align-items: center;
  padding: 5px 6px 5px 0;
`;

const AthleteList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  border: 1px solid ${colors.darkBlue};
  height: 90px;
  border-radius: 10px;
  padding-left: 5px;
`;

const SelectButton = styled.button`
  display: flex;
  width: 75px;
  height: 30px;
  border-radius: 25px;
  color: white;
  background: ${colors.darkBlue};

  justify-content: center;
  align-items: center;
  font-family: Barlow;

  font-weight: bold;
  border: 1px solid white;
  border: 1px solid transparent;

  :hover {
    color: ${colors.darkBlue};
    background: white;
    border: 1px solid ${colors.darkBlue};
  }

  ${({ isActive }) =>
    !isActive &&
    `  
      opacity: 0.5;
      pointer-events: none;
  `};
`;

const PlayerProfileTile = styled.div`
  display: flex;
  flex-direction: column;
  border: 5px solid ${colors.darkBlue};
  height: 90%;
  border-radius: 10px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const PlayerTitle = styled.p`
  font-family: Barlow;
  color: ${colors.mainBlue};
  font-size: 28px;
  font-weight: 800;
  margin 0;
`;

const PlayerDetails = styled.p`
  font-family: Barlow;
  color: ${colors.mainBlue};
  font-size: 16px;
  margin 0; 
`;

const StyledImage = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
`;

const ChartContainer = styled.div`
  display: flex;
  height: 80%;
`;
