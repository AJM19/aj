import styled from 'styled-components';
import { ProjectPage } from '../../components/ProjectPage';

const TradeBreakdownAnalyzer = () => {
  return (
    <ProjectPage
      eyebrow="case study"
      title="Trade Breakdown Analyzer"
      year="2025"
      lede="A hypothetical Sleeper fantasy feature exploring user dissatisfaction with trade analysis — and a proposal for an in-depth analyzer that gives users confidence in every trade."
      backTo="/case-study"
      backLabel="all case studies"
    >
      <FigmaFrame>
        <iframe
          title="Trade Analyzer figma embed"
          src="https://embed.figma.com/design/Sw6nSvOjDiaBf0IEtnPhRe/Trade-Analyzer-Tool?node-id=0-1&embed-host=share"
          allowFullScreen
        />
      </FigmaFrame>
    </ProjectPage>
  );
};

export default TradeBreakdownAnalyzer;

const FigmaFrame = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.rule};
  background: ${({ theme }) => theme.bgElevated};

  iframe {
    width: 100%;
    min-height: 720px;
    border: none;
    display: block;
  }
`;
