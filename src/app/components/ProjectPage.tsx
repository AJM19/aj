import { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { Container, Eyebrow } from '../styles/primitives';
import { fontFamily, fontSize, motion, space, weight } from '../styles/tokens';

interface Props {
  eyebrow?: string;
  title: string;
  year?: string;
  lede?: string;
  backTo?: string;
  backLabel?: string;
  children: ReactNode;
}

export const ProjectPage = ({
  eyebrow = 'project',
  title,
  year,
  lede,
  backTo = '/projects',
  backLabel = 'all projects',
  children,
}: Props) => {
  return (
    <Layout>
      <Hero>
        <Container>
          <BackLink to={backTo}>
            <span>←</span> {backLabel}
          </BackLink>
          <Eyebrow>
            {eyebrow}
            {year && <YearSeparator> · {year}</YearSeparator>}
          </Eyebrow>
          <Title>
            {title}
            <Period>.</Period>
          </Title>
          {lede && <Lede>{lede}</Lede>}
        </Container>
      </Hero>
      <Body>
        <Container>{children}</Container>
      </Body>
    </Layout>
  );
};

const flyUp = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Hero = styled.section`
  padding: clamp(${space['8']}, 10vh, ${space['12']}) 0 ${space['5']};
  border-bottom: 1px solid ${({ theme }) => theme.rule};

  > div > * {
    animation: ${flyUp} 500ms ${motion.easeOut} both;
  }
  > div > *:nth-child(2) { animation-delay: 40ms; }
  > div > *:nth-child(3) { animation-delay: 90ms; }
  > div > *:nth-child(4) { animation-delay: 140ms; }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${space['1']};
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.sm};
  color: ${({ theme }) => theme.fgMuted};
  margin-bottom: ${space['3']};
  transition: color ${motion.base} ${motion.ease};

  &:hover { color: ${({ theme }) => theme.accent}; }
  &:hover span { transform: translateX(-3px); }

  span {
    transition: transform ${motion.base} ${motion.ease};
  }
`;

const YearSeparator = styled.span`
  color: ${({ theme }) => theme.fgFaint};
`;

const Title = styled.h1`
  margin: ${space['2']} 0 0;
  font-family: ${fontFamily.display};
  font-weight: ${weight.bold};
  letter-spacing: -0.03em;
  line-height: 1.05;
  font-size: clamp(40px, 7vw, 72px);
  color: ${({ theme }) => theme.fg};
`;

const Period = styled.span`
  color: ${({ theme }) => theme.accent};
`;

const Lede = styled.p`
  margin: ${space['3']} 0 0;
  max-width: 60ch;
  color: ${({ theme }) => theme.fgMuted};
  font-size: ${fontSize.lg};
  line-height: 1.6;
`;

const Body = styled.div`
  padding: ${space['6']} 0 ${space['12']};
`;
