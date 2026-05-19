import Layout from '../components/Layout';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Journey from '../components/Journey';
import Contact from '../components/Contact';
import { Container, Section, Eyebrow, Display, Row } from '../styles/primitives';
import { fontFamily, fontSize, motion, space, weight } from '../styles/tokens';
import { selectedWork } from '../data/work';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection>
        <Container>
          <HeroGrid>
            <HeroCopy>
              <Eyebrow>portfolio · 2026</Eyebrow>
              <Display $size="xl">
                AJ Milbauer<Period>.</Period>
              </Display>
              <Tagline>
                <MonoSpan>engineer</MonoSpan>
                <Dot />
                <span>building full-stack products since 2021.</span>
              </Tagline>
              <Subline>
                Currently building at{' '}
                <Inline
                  href="https://www.arccosgolf.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Arccos Golf
                </Inline>
                . Previously at Golf PDI, Capgemini, and the University of
                Miami.
              </Subline>

              <CTARow>
                <PrimaryLink to="/projects">
                  <span>view work</span>
                  <Arrow>→</Arrow>
                </PrimaryLink>
                <GhostLink to="/resume">resume</GhostLink>
                <GhostAnchor href="mailto:ajmilbauer@gmail.com">
                  say hi
                </GhostAnchor>
              </CTARow>
            </HeroCopy>

            <HeroAside>
              <Avatar>
                <AvatarTag>aj.png</AvatarTag>
                <AvatarImage
                  src="./assets/images/bitmoji-computer.png"
                  alt="AJ at a laptop"
                />
              </Avatar>
              <StackStrip>
                <StackLabel>stack</StackLabel>
                <StackIcons>
                  <StackIcon src="./assets/images/react.png" alt="React" />
                  <StackIcon
                    src="./assets/images/typescript.png"
                    alt="TypeScript"
                  />
                  <StackIcon
                    src="./assets/images/javascript.png"
                    alt="JavaScript"
                  />
                  <StackIcon src="./assets/images/node_js.png" alt="Node.js" />
                  <StackIcon src="./assets/images/css3.png" alt="CSS3" />
                  <StackIcon src="./assets/images/html.png" alt="HTML" />
                </StackIcons>
              </StackStrip>
            </HeroAside>
          </HeroGrid>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionHead>
            <Eyebrow>selected work</Eyebrow>
            <SectionMeta to="/projects">
              all projects <Arrow>→</Arrow>
            </SectionMeta>
          </SectionHead>
          <WorkList>
            {selectedWork.map((entry, idx) => {
              const content = (
                <>
                  <WorkIndex>{String(idx + 1).padStart(2, '0')}</WorkIndex>
                  <WorkBody>
                    <WorkTitle>{entry.title}</WorkTitle>
                    <WorkMeta>{entry.tagline}</WorkMeta>
                  </WorkBody>
                  <WorkTags>
                    {entry.stack.slice(0, 3).map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </WorkTags>
                  <WorkArrow>{entry.external ? '↗' : '→'}</WorkArrow>
                </>
              );
              return entry.external ? (
                <WorkRowExternal
                  key={entry.slug}
                  href={entry.path}
                  target="_blank"
                  rel="noreferrer"
                >
                  {content}
                </WorkRowExternal>
              ) : (
                <WorkRow key={entry.slug} to={entry.path}>
                  {content}
                </WorkRow>
              );
            })}
          </WorkList>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHead>
            <Eyebrow>experience</Eyebrow>
          </SectionHead>
          <Journey />
        </Container>
      </Section>

      <Section>
        <Container>
          <Contact />
        </Container>
      </Section>
    </Layout>
  );
};

export default HomePage;

const flyUp = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const HeroSection = styled.section`
  padding: clamp(${space['8']}, 14vh, ${space['16']}) 0 ${space['8']};
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: ${space['6']};
  align-items: center;
  animation: ${flyUp} 500ms ${motion.easeOut} both;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: ${space['5']};
  }
`;

const HeroCopy = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    animation: ${flyUp} 500ms ${motion.easeOut} both;
  }
  > *:nth-child(2) { animation-delay: 60ms; }
  > *:nth-child(3) { animation-delay: 120ms; }
  > *:nth-child(4) { animation-delay: 180ms; }
  > *:nth-child(5) { animation-delay: 240ms; }
`;

const HeroAside = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space['2']};
  animation: ${flyUp} 600ms 200ms ${motion.easeOut} both;

  @media (max-width: 900px) {
    order: -1;
    max-width: 320px;
  }
`;

const Avatar = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  border: 1px solid ${({ theme }) => theme.ruleStrong};
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'linear-gradient(135deg, rgba(59,140,211,0.08), rgba(59,140,211,0.02))'
      : 'linear-gradient(135deg, rgba(16,100,168,0.05), rgba(16,100,168,0.01))'};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
        ${({ theme }) => theme.rule} 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        ${({ theme }) => theme.rule} 1px,
        transparent 1px
      );
    background-size: 32px 32px;
    opacity: 0.6;
    pointer-events: none;
  }
`;

const AvatarTag = styled.span`
  position: absolute;
  top: ${space['1']};
  left: ${space['1']};
  font-family: ${fontFamily.mono};
  font-size: 10px;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.fgMuted};
  background: ${({ theme }) => theme.bg};
  padding: 2px 6px;
  border: 1px solid ${({ theme }) => theme.rule};
  z-index: 2;
`;

const AvatarImage = styled.img`
  position: relative;
  z-index: 1;
  max-width: 78%;
  max-height: 78%;
  object-fit: contain;
`;

const StackStrip = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: ${space['2']};
  padding: ${space['1']} ${space['1_5']};
  border: 1px solid ${({ theme }) => theme.rule};
`;

const StackLabel = styled.span`
  font-family: ${fontFamily.mono};
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.fgMuted};
`;

const StackIcons = styled.div`
  display: flex;
  gap: ${space['1_5']};
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const StackIcon = styled.img`
  width: 22px;
  height: 22px;
  object-fit: contain;
  filter: grayscale(0.7);
  opacity: 0.8;
  transition: filter ${motion.base} ${motion.ease}, opacity ${motion.base} ${motion.ease};

  &:hover {
    filter: grayscale(0);
    opacity: 1;
  }
`;

const Period = styled.span`
  color: ${({ theme }) => theme.accent};
`;

const Tagline = styled.div`
  margin-top: ${space['3']};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${space['1_5']};
  font-size: clamp(${fontSize.lg}, 2.2vw, ${fontSize['2xl']});
  color: ${({ theme }) => theme.fg};
`;

const MonoSpan = styled.span`
  font-family: ${fontFamily.mono};
  font-size: 0.85em;
  color: ${({ theme }) => theme.accent};
`;

const Dot = styled.span`
  width: 4px;
  height: 4px;
  background: ${({ theme }) => theme.ruleStrong};
  border-radius: 50%;
`;

const Subline = styled.p`
  margin-top: ${space['2']};
  max-width: 60ch;
  color: ${({ theme }) => theme.fgMuted};
  font-size: ${fontSize.lg};
  line-height: 1.6;
`;

const Inline = styled.a`
  color: ${({ theme }) => theme.fg};
  border-bottom: 1px solid ${({ theme }) => theme.ruleStrong};
  transition: border-color ${motion.base} ${motion.ease}, color ${motion.base} ${motion.ease};

  &:hover {
    color: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
  }
`;

const CTARow = styled(Row)`
  margin-top: ${space['5']};
  gap: ${space['1_5']};
  flex-wrap: wrap;
`;

const linkChrome = `
  display: inline-flex;
  align-items: center;
  gap: ${space['1']};
  height: 44px;
  padding: 0 ${space['3']};
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.sm};
  letter-spacing: 0.02em;
  text-decoration: none;
  transition: background ${motion.base} ${motion.ease},
    color ${motion.base} ${motion.ease},
    border-color ${motion.base} ${motion.ease};
`;

const PrimaryLink = styled(Link)`
  ${linkChrome};
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.accentFg};
  border: 1px solid ${({ theme }) => theme.accent};

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.accent};
  }
`;

const GhostLink = styled(Link)`
  ${linkChrome};
  background: transparent;
  color: ${({ theme }) => theme.fg};
  border: 1px solid ${({ theme }) => theme.ruleStrong};

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
  }
`;

const GhostAnchor = styled.a`
  ${linkChrome};
  background: transparent;
  color: ${({ theme }) => theme.fg};
  border: 1px solid ${({ theme }) => theme.ruleStrong};

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
  }
`;

const Arrow = styled.span`
  transition: transform ${motion.base} ${motion.ease};
`;

const SectionHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${space['4']};
`;

const SectionMeta = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${space['1']};
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.sm};
  color: ${({ theme }) => theme.fgMuted};
  transition: color ${motion.base} ${motion.ease};

  &:hover {
    color: ${({ theme }) => theme.accent};
    ${Arrow} {
      transform: translateX(2px);
    }
  }
`;

const WorkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid ${({ theme }) => theme.rule};
`;

const workRowStyles = `
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;
  gap: 24px;
  padding: 24px 0;
`;

const WorkRow = styled(Link)`
  ${workRowStyles};
  border-bottom: 1px solid ${({ theme }) => theme.rule};
  color: ${({ theme }) => theme.fg};
  transition: color ${motion.base} ${motion.ease};

  &:hover { color: ${({ theme }) => theme.accent}; }
  &:hover span:last-of-type { transform: translateX(4px); }

  @media (max-width: 640px) {
    grid-template-columns: auto 1fr auto;
  }
`;

const WorkRowExternal = styled.a`
  ${workRowStyles};
  border-bottom: 1px solid ${({ theme }) => theme.rule};
  color: ${({ theme }) => theme.fg};
  transition: color ${motion.base} ${motion.ease};

  &:hover { color: ${({ theme }) => theme.accent}; }
  &:hover span:last-of-type { transform: translateX(4px); }

  @media (max-width: 640px) {
    grid-template-columns: auto 1fr auto;
  }
`;

const WorkIndex = styled.span`
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.sm};
  color: ${({ theme }) => theme.fgFaint};
  min-width: 28px;
`;

const WorkBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space['0_5']};
`;

const WorkTitle = styled.span`
  font-family: ${fontFamily.display};
  font-size: clamp(${fontSize.xl}, 3vw, ${fontSize['3xl']});
  font-weight: ${weight.semibold};
  letter-spacing: -0.02em;
`;

const WorkMeta = styled.span`
  font-family: ${fontFamily.sans};
  font-size: ${fontSize.sm};
  color: ${({ theme }) => theme.fgMuted};
`;

const WorkTags = styled.div`
  display: flex;
  gap: ${space['1']};

  @media (max-width: 640px) {
    display: none;
  }
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

const WorkArrow = styled.span`
  font-family: ${fontFamily.mono};
  color: ${({ theme }) => theme.fgMuted};
  transition: transform ${motion.base} ${motion.ease};
`;
