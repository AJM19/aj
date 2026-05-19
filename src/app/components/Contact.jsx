import styled from 'styled-components';
import { Eyebrow } from '../styles/primitives';
import { fontFamily, fontSize, motion, space, weight } from '../styles/tokens';

const Contact = () => {
  return (
    <Wrap id="contactMe">
      <Eyebrow>say hi</Eyebrow>
      <Heading>
        Let's build<Period>.</Period>
      </Heading>
      <Lead>
        I'm always up for a chat about engineering, product, or anything you
        think I'd find interesting.
      </Lead>
      <Channels>
        <Channel
          href="mailto:ajmilbauer@gmail.com"
          $primary
        >
          <ChLabel>email</ChLabel>
          <ChValue>ajmilbauer@gmail.com</ChValue>
          <ChArrow>→</ChArrow>
        </Channel>
        <Channel
          href="https://github.com/AJM19"
          target="_blank"
          rel="noreferrer"
        >
          <ChLabel>github</ChLabel>
          <ChValue>@AJM19</ChValue>
          <ChArrow>↗</ChArrow>
        </Channel>
        <Channel
          href="https://www.linkedin.com/in/aj-milbauer/"
          target="_blank"
          rel="noreferrer"
        >
          <ChLabel>linkedin</ChLabel>
          <ChValue>aj-milbauer</ChValue>
          <ChArrow>↗</ChArrow>
        </Channel>
      </Channels>
    </Wrap>
  );
};

export default Contact;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space['2']};
`;

const Heading = styled.h2`
  margin: 0;
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

const Lead = styled.p`
  max-width: 56ch;
  margin: 0;
  color: ${({ theme }) => theme.fgMuted};
  font-size: ${fontSize.lg};
  line-height: 1.6;
`;

const Channels = styled.div`
  margin-top: ${space['4']};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${space['1_5']};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Channel = styled.a`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: baseline;
  gap: ${space['2']};
  padding: ${space['2']} ${space['2']};
  border: 1px solid
    ${({ theme, $primary }) => ($primary ? theme.accent : theme.rule)};
  color: ${({ theme }) => theme.fg};
  transition:
    border-color ${motion.base} ${motion.ease},
    color ${motion.base} ${motion.ease},
    background ${motion.base} ${motion.ease};

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
  }
`;

const ChLabel = styled.span`
  font-family: ${fontFamily.mono};
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.fgMuted};
`;

const ChValue = styled.span`
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.sm};
`;

const ChArrow = styled.span`
  font-family: ${fontFamily.mono};
  color: ${({ theme }) => theme.fgMuted};
`;
