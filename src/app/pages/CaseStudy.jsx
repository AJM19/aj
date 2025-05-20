import Layout from '../components/Layout';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import { BodyText, colors, Header1, SubHeader1 } from '../styles/styledcomps';

const CaseStudy = () => {
  return (
    <Layout>
      <HeaderContainer>
        <Header1 style={{ textAlign: 'center' }} color={'white'}>
          Case Study Binder
        </Header1>
        <SubHeader1 color={'white'}>
          Click a Case Study Card to learn more...{' '}
        </SubHeader1>
        <BodyText color="white">
          {'(Modeled after Topps Baseball cards )'}
        </BodyText>
      </HeaderContainer>
      <StyledContainer>
        <ProjectCard
          isCaseStudy={true}
          titleColor={'#2e355e'}
          mainColor={'#262c51'}
          background={'./assets/images/bitmoji-football.png'}
          name="Trade Breakdown Analyzer"
          logo={'./assets/images/sleeper.png'}
          year="2025"
          logoColor={'white'}
          link="/case-study/trade-analyzer"
          description={
            'Trade Breakdown Analyzer feature case study. This hypothetical case study looks to resolve issues of user dissatisfaction in the Sleeper fantasy app by creating a new feature that will provide in-depth analysis of trades & transactions.'
          }
        />
      </StyledContainer>
    </Layout>
  );
};

export default CaseStudy;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px;
  margin: 3%;
  justify-items: center;
  row-gap: 30px;
  background: white;
  padding: 50px 15px;
  border-radius: 10px;
  justify-content: space-around;
  box-shadow: 5px 4px 9px 1px #73707099;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  flex-direction: column;
`;
