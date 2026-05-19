import styled, { keyframes } from 'styled-components';
import Layout from '../components/Layout';
import { Container, Section, Eyebrow, Display } from '../styles/primitives';
import { fontFamily, fontSize, motion, space } from '../styles/tokens';

const Resume = () => {
  return (
    <Layout>
      <Hero>
        <Container>
          <HeadRow>
            <Headings>
              <Eyebrow>document · pdf</Eyebrow>
              <Display>Resume<Period>.</Period></Display>
            </Headings>
            <DownloadLink
              href="./assets/files/PM_RESUME.pdf"
              download
              target="_blank"
              rel="noreferrer"
            >
              download pdf <span>↓</span>
            </DownloadLink>
          </HeadRow>
        </Container>
      </Hero>
      <Section>
        <Container>
          <Frame>
            <iframe
              title="resume"
              src="./assets/files/PM_RESUME.pdf"
              width="100%"
              height="900px"
              style={{ border: 'none', display: 'block' }}
            />
          </Frame>
        </Container>
      </Section>
    </Layout>
  );
};

export default Resume;

const flyUp = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Hero = styled.section`
  padding: clamp(${space['8']}, 12vh, ${space['16']}) 0 ${space['4']};

  > div > * {
    animation: ${flyUp} 500ms ${motion.easeOut} both;
  }
`;

const HeadRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${space['3']};
  flex-wrap: wrap;
`;

const Headings = styled.div``;

const Period = styled.span`
  color: ${({ theme }) => theme.accent};
`;

const DownloadLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${space['1']};
  height: 40px;
  padding: 0 ${space['2']};
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.sm};
  color: ${({ theme }) => theme.fg};
  border: 1px solid ${({ theme }) => theme.ruleStrong};
  transition: color ${motion.base} ${motion.ease}, border-color ${motion.base} ${motion.ease};

  &:hover {
    color: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
  }

  span {
    transition: transform ${motion.base} ${motion.ease};
  }
  &:hover span {
    transform: translateY(2px);
  }
`;

const Frame = styled.div`
  border: 1px solid ${({ theme }) => theme.rule};
  background: ${({ theme }) => theme.bgElevated};
`;
