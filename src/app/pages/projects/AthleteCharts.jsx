import { useState } from 'react';
import styled from 'styled-components';
import { ProjectPage } from '../../components/ProjectPage';
import SearchBar from '../../components/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPlayerByName,
  athleteSelectors,
  athleteActions,
} from '../../../store/athlete.slice';
import BarChart from '../../components/d3/barChart';
import Modal from '../../components/Modal';
import { palette, fontFamily, fontSize, motion, space, weight } from '../../styles/tokens';

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
    const ageDifMs = Date.now() - date.getTime();
    const ageDate = new Date(ageDifMs);
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

  const getAthleteById = (id) => players.find((p) => p.id === id);

  const selectAthlete = (id) => {
    if (!athlete1) setAthlete1(getAthleteById(id));
    else if (!athlete2) setAthlete2(getAthleteById(id));
  };

  return (
    <ProjectPage
      eyebrow="project"
      title="Athlete Charts"
      year="2023"
      lede="Pick two athletes from a public dataset and compare them side-by-side or in chart view. D3 renders the chart side."
    >
      <Modal
        isOpen={isModalOpen}
        closeModal={() => setModalOpen(false)}
        content={
          <DisclaimerWrap>
            <DisclaimerLabel>heads up</DisclaimerLabel>
            <DisclaimerTitle>Public-API data caveats.</DisclaimerTitle>
            <DisclaimerText>
              Data comes from a public API and isn't reliable for every sport.
              Best results: pick two soccer players.
            </DisclaimerText>
          </DisclaimerWrap>
        }
      />

      <SearchPanel>
        {error && <StyledError>{error}</StyledError>}
        <SearchRow>
          <SearchBar
            placeholder={'search by last name'}
            enterToggle={searchPlayer}
            setValue={setValue}
          />
          <PillBtn $disabled={value === ''} onClick={searchPlayer}>
            search
          </PillBtn>
          <PillBtn
            $variant="ghost"
            $disabled={players.length === 0}
            onClick={clearPlayers}
          >
            clear
          </PillBtn>
        </SearchRow>
        <AthleteList>
          {loadingStatus !== 'loading' ? (
            players.length > 0 ? (
              players.map((player) => (
                <AthleteRow key={player.id}>
                  <AthleteName>{player.name}</AthleteName>
                  <PillBtn
                    $disabled={Boolean(athlete1 && athlete2)}
                    onClick={() => selectAthlete(player.id)}
                  >
                    select
                  </PillBtn>
                </AthleteRow>
              ))
            ) : (
              <Empty>no players</Empty>
            )
          ) : (
            <Empty>loading…</Empty>
          )}
        </AthleteList>
      </SearchPanel>

      <ComparePanel $isChart={isChartViewShowing}>
        {!isChartViewShowing ? (
          <>
            {athlete1 && (
              <ProfileCard>
                <ProfileTitle>{athlete1.name}</ProfileTitle>
                <ProfileImg src={athlete1.imageLink} alt={`${athlete1.name}`} />
                <Detail label="age" value={calculateAge(new Date(athlete1.DOB))} />
                <Detail label="team" value={athlete1.teamName} />
                <Detail label="position" value={athlete1.position} />
                <Detail label="height" value={athlete1.height} />
              </ProfileCard>
            )}
            {athlete1 && athlete2 && (
              <CompareActions>
                <PillBtn onClick={resetSelections}>reset</PillBtn>
                <PillBtn onClick={() => setChartViewShowing(true)}>compare</PillBtn>
              </CompareActions>
            )}
            {athlete2 && (
              <ProfileCard>
                <ProfileTitle>{athlete2.name}</ProfileTitle>
                <ProfileImg src={athlete2.imageLink} alt={`${athlete2.name}`} />
                <Detail label="age" value={calculateAge(new Date(athlete2.DOB))} />
                <Detail label="team" value={athlete2.teamName} />
                <Detail label="position" value={athlete2.position} />
                <Detail label="height" value={athlete2.height} />
              </ProfileCard>
            )}
          </>
        ) : (
          <ChartView>
            <PillBtn
              $variant="ghost"
              style={{ alignSelf: 'flex-end' }}
              onClick={() => setChartViewShowing(false)}
            >
              regular view
            </PillBtn>
            <ChartGrid>
              <ChartCard>
                <BarChart
                  data={[
                    { x: athlete1.name, y: calculateAge(new Date(athlete1.DOB)) },
                    { x: athlete2.name, y: calculateAge(new Date(athlete2.DOB)) },
                  ]}
                  barColor={palette.blue400}
                  minValue={0}
                  maxValue={90}
                  tick={10}
                  title={'Age'}
                  caption={' yrs'}
                />
              </ChartCard>
              <ChartCard>
                <BarChart
                  data={[
                    { x: athlete1.name, y: athlete1.weight },
                    { x: athlete2.name, y: athlete2.weight },
                  ]}
                  barColor={palette.blue400}
                  minValue={0}
                  maxValue={300}
                  tick={10}
                  title={'Weight'}
                  caption={' lbs'}
                />
              </ChartCard>
            </ChartGrid>
          </ChartView>
        )}
      </ComparePanel>
    </ProjectPage>
  );
};

const Detail = ({ label, value }) => (
  <DetailRow>
    <DetailLabel>{label}</DetailLabel>
    <DetailValue>{value}</DetailValue>
  </DetailRow>
);

export default AthleteCharts;

const SearchPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space['2']};
  padding-bottom: ${space['4']};
  border-bottom: 1px solid ${({ theme }) => theme.rule};
`;

const SearchRow = styled.div`
  display: flex;
  gap: ${space['1']};
  flex-wrap: wrap;
`;

const PillBtn = styled.button`
  height: 36px;
  padding: 0 ${space['2']};
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.sm};
  background: ${({ theme, $variant }) => ($variant === 'ghost' ? 'transparent' : theme.accent)};
  color: ${({ theme, $variant }) => ($variant === 'ghost' ? theme.fg : theme.accentFg)};
  border: 1px solid ${({ theme, $variant }) => ($variant === 'ghost' ? theme.ruleStrong : theme.accent)};
  cursor: pointer;
  transition: background ${motion.base} ${motion.ease}, color ${motion.base} ${motion.ease}, border-color ${motion.base} ${motion.ease};

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
  }

  ${({ $disabled }) =>
    $disabled &&
    `
      opacity: 0.4;
      pointer-events: none;
  `}
`;

const AthleteList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid ${({ theme }) => theme.rule};
`;

const AthleteRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${space['1']} ${space['2']};
  border-bottom: 1px solid ${({ theme }) => theme.rule};
  &:last-child { border-bottom: none; }
`;

const AthleteName = styled.span`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize.sm};
  color: ${({ theme }) => theme.fg};
`;

const Empty = styled.span`
  padding: ${space['2']};
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.sm};
  color: ${({ theme }) => theme.fgFaint};
`;

const StyledError = styled.p`
  margin: 0;
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.xs};
  color: ${({ theme }) => theme.accent};
`;

const ComparePanel = styled.div`
  margin-top: ${space['4']};
  display: grid;
  grid-template-columns: ${({ $isChart }) => ($isChart ? '1fr' : '1fr auto 1fr')};
  align-items: start;
  gap: ${space['3']};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.rule};
  background: ${({ theme }) => theme.bgElevated};
  padding: ${space['3']};
  gap: ${space['1_5']};
`;

const ProfileTitle = styled.h3`
  margin: 0;
  font-family: ${fontFamily.display};
  font-size: ${fontSize.xl};
  font-weight: ${weight.semibold};
  color: ${({ theme }) => theme.fg};
  text-align: center;
`;

const ProfileImg = styled.img`
  width: 96px;
  height: 96px;
  object-fit: cover;
  border: 1px solid ${({ theme }) => theme.rule};
`;

const DetailRow = styled.div`
  display: flex;
  width: 100%;
  align-items: baseline;
  justify-content: space-between;
  padding: ${space['1']} 0;
  border-bottom: 1px solid ${({ theme }) => theme.rule};
  &:last-child { border-bottom: none; }
`;

const DetailLabel = styled.span`
  font-family: ${fontFamily.mono};
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.fgMuted};
`;

const DetailValue = styled.span`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize.sm};
  color: ${({ theme }) => theme.fg};
`;

const CompareActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space['1']};
`;

const ChartView = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space['2']};
`;

const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${space['2']};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ChartCard = styled.div`
  border: 1px solid ${({ theme }) => theme.rule};
  background: ${({ theme }) => theme.bgElevated};
  padding: ${space['2']};
`;

const DisclaimerWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space['1_5']};
  max-width: 480px;
`;

const DisclaimerLabel = styled.span`
  font-family: ${fontFamily.mono};
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.accent};
`;

const DisclaimerTitle = styled.h2`
  margin: 0;
  font-family: ${fontFamily.display};
  font-size: ${fontSize['2xl']};
  font-weight: ${weight.bold};
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.fg};
`;

const DisclaimerText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.fgMuted};
  font-size: ${fontSize.sm};
  line-height: 1.5;
`;
