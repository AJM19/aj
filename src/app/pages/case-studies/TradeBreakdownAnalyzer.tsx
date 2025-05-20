import styled from 'styled-components';
import Layout from '../../components/Layout';
import { Header1, colors, SubHeader1 } from '../../styles/styledcomps';

const TradeBreakdownAnalyzer = () => {
  return (
    <Layout>
      <StyledContainer>
        <Header1 style={{ fontSize: '45px' }} color={colors.mainBlue}>
          Trade Breakdown Analyzer (2025)
        </Header1>
        <SubHeader1 color={colors.darkBlue}>
          Trade Breakdown Analyzer feature case study. This hypothetical case
          study looks to resolve issues of user dissatisfaction in the Sleeper
          fantasy app by creating a new feature that will provide in-depth
          analysis of trades & transactions.
        </SubHeader1>
      </StyledContainer>
      <StyledContainer>
        <iframe
          style={{
            border: '1px solid rgba(0, 0, 0, 0.1)',
            width: '100%',
            minHeight: '500px',
          }}
          src="https://embed.figma.com/design/Sw6nSvOjDiaBf0IEtnPhRe/Trade-Analyzer-Tool?node-id=0-1&embed-host=share"
          allowFullScreen
        ></iframe>
      </StyledContainer>
    </Layout>
  );
};

export default TradeBreakdownAnalyzer;

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  background: white;
  border-radius: 10px;
  margin: 10px auto;
  border: 3px solid ${colors.darkBlue};
  padding-top: 15px;
  align-items: flex-start;
  padding: 10px 15px;
  align-items: center;
  gap: 15px;
  text-align: center;
`;
