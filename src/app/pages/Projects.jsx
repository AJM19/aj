import Layout from '../components/Layout';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Section, Eyebrow, Display } from '../styles/primitives';
import { fontFamily, fontSize, motion, space, weight } from '../styles/tokens';
import { work } from '../data/work';

const Projects = () => {
  return (
    <Layout>
      <HeroSection>
        <Container>
          <Eyebrow>work · {work.length} entries</Eyebrow>
          <Display>The archive<Period>.</Period></Display>
          <Lead>
            A mix of shipped products, weekend hacks, and prototypes — newest
            first. Some link to live demos, others to write-ups.
          </Lead>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <List>
            {work.map((entry, idx) => {
              const content = (
                <>
                  <Idx>{String(idx + 1).padStart(2, '0')}</Idx>
                  <Body>
                    <TitleRow>
                      <Title>{entry.title}</Title>
                      <Year>{entry.year}</Year>
                    </TitleRow>
                    <Tagline>{entry.tagline}</Tagline>
                    <Description>{entry.description}</Description>
                  </Body>
                  <Side>
                    <Stack>
                      {entry.stack.map((s) => (
                        <Tag key={s}>{s}</Tag>
                      ))}
                    </Stack>
                    <Arrow>{entry.external ? '↗' : '→'}</Arrow>
                  </Side>
                </>
              );
              return entry.external ? (
                <RowExternal
                  key={entry.slug}
                  href={entry.path}
                  target="_blank"
                  rel="noreferrer"
                >
                  {content}
                </RowExternal>
              ) : (
                <Row key={entry.slug} to={entry.path}>
                  {content}
                </Row>
              );
            })}
          </List>
        </Container>
      </Section>
    </Layout>
  );
};

export default Projects;

const flyUp = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const HeroSection = styled.section`
  padding: clamp(${space['8']}, 12vh, ${space['16']}) 0 ${space['6']};

  > div > * {
    animation: ${flyUp} 500ms ${motion.easeOut} both;
  }
  > div > *:nth-child(2) { animation-delay: 60ms; }
  > div > *:nth-child(3) { animation-delay: 120ms; }
`;

const Period = styled.span`
  color: ${({ theme }) => theme.accent};
`;

const Lead = styled.p`
  margin-top: ${space['3']};
  max-width: 64ch;
  color: ${({ theme }) => theme.fgMuted};
  font-size: ${fontSize.lg};
  line-height: 1.6;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid ${({ theme }) => theme.rule};
`;

const rowChrome = `
  display: grid;
  grid-template-columns: 56px 1fr 220px;
  gap: 24px;
  padding: 28px 0;
  align-items: start;
`;

const Row = styled(Link)`
  ${rowChrome};
  border-bottom: 1px solid ${({ theme }) => theme.rule};
  color: ${({ theme }) => theme.fg};
  transition: color ${motion.base} ${motion.ease};

  &:hover { color: ${({ theme }) => theme.accent}; }
  &:hover .arrow { transform: translateX(4px); }

  @media (max-width: 768px) {
    grid-template-columns: 40px 1fr;
  }
`;

const RowExternal = styled.a`
  ${rowChrome};
  border-bottom: 1px solid ${({ theme }) => theme.rule};
  color: ${({ theme }) => theme.fg};
  transition: color ${motion.base} ${motion.ease};

  &:hover { color: ${({ theme }) => theme.accent}; }
  &:hover .arrow { transform: translateX(4px); }

  @media (max-width: 768px) {
    grid-template-columns: 40px 1fr;
  }
`;

const Idx = styled.span`
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.sm};
  color: ${({ theme }) => theme.fgFaint};
  padding-top: 4px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space['1']};
`;

const TitleRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${space['2']};
`;

const Title = styled.span`
  font-family: ${fontFamily.display};
  font-size: clamp(${fontSize['2xl']}, 3vw, ${fontSize['3xl']});
  font-weight: ${weight.semibold};
  letter-spacing: -0.02em;
`;

const Year = styled.span`
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.sm};
  color: ${({ theme }) => theme.fgFaint};
`;

const Tagline = styled.span`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize.base};
  color: ${({ theme }) => theme.fgMuted};
`;

const Description = styled.p`
  margin: ${space['1']} 0 0;
  max-width: 64ch;
  font-size: ${fontSize.sm};
  color: ${({ theme }) => theme.fgMuted};
  line-height: 1.6;
`;

const Side = styled.div.attrs({})`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${space['2']};
  padding-top: 6px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: ${space['1']};
`;

const Tag = styled.span`
  font-family: ${fontFamily.mono};
  font-size: 11px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.fgMuted};
  padding: 4px 8px;
  border: 1px solid ${({ theme }) => theme.rule};
`;

const Arrow = styled.span.attrs({ className: 'arrow' })`
  font-family: ${fontFamily.mono};
  color: ${({ theme }) => theme.fgMuted};
  transition: transform ${motion.base} ${motion.ease};
`;
