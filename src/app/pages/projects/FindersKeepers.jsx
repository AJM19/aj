import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal';
import { fontFamily, fontSize, motion, space, weight } from '../../styles/tokens';

const FindersKeepers = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isModalOpen, setModalOpen] = useState(true);
  const [iconLocation, setIconLocation] = useState({ x: 50, y: 50 });
  const [timesFound, setTimesFound] = useState(0);

  const randomizeIconLocation = () => {
    setIconLocation({
      x: Math.floor(Math.random() * 51) + 25,
      y: Math.floor(Math.random() * 51) + 25,
    });
    setTimesFound(timesFound + 1);
  };

  const handleMouseMove = (event) => {
    setCoords({ x: event.clientX, y: event.clientY });
    document.documentElement.style.setProperty('--cursorX', event.clientX + 'px');
    document.documentElement.style.setProperty('--cursorY', event.clientY + 'px');
  };

  return (
    <Stage>
      <Modal
        isOpen={isModalOpen}
        closeModal={() => setModalOpen(false)}
        content={
          <RulesWrap>
            <RuleLabel>rules</RuleLabel>
            <RuleTitle>Finders Keepers.</RuleTitle>
            <RuleP>
              Use your mouse as a flashlight to find the icon. Each click sends
              it to a new random location. Find it as many times as possible.
            </RuleP>
            <RuleP $faint>
              (Desktop / laptop only — needs a mouse for the flashlight to
              work.)
            </RuleP>
          </RulesWrap>
        }
      />

      <BackLink to="/projects">← back to work</BackLink>

      <Scoreboard>
        <ScoreLabel>score</ScoreLabel>
        <ScoreValue>{String(timesFound).padStart(2, '0')}</ScoreValue>
      </Scoreboard>

      <Flashlight onMouseMove={handleMouseMove} />

      <Finder
        $x={iconLocation.x}
        $y={iconLocation.y}
        onClick={randomizeIconLocation}
        aria-label="Find me"
      />
    </Stage>
  );
};

export default FindersKeepers;

const Stage = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.bg};
  overflow: hidden;
`;

const Flashlight = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle 7vmax at var(--cursorX) var(--cursorY),
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 60%,
    rgba(0, 0, 0, 0.96) 100%
  );
  z-index: 5;
`;

const BackLink = styled(Link)`
  position: fixed;
  top: ${space['2']};
  left: ${space['3']};
  z-index: 20;
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.sm};
  color: ${({ theme }) => theme.fgMuted};
  transition: color ${motion.base} ${motion.ease};
  &:hover { color: ${({ theme }) => theme.accent}; }
`;

const Scoreboard = styled.div`
  position: fixed;
  top: ${space['8']};
  right: ${space['3']};
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: ${space['1_5']} ${space['2']};
  border: 1px solid ${({ theme }) => theme.ruleStrong};
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(10,11,14,0.6)' : 'rgba(255,255,255,0.7)'};
  backdrop-filter: blur(6px);
`;

const ScoreLabel = styled.span`
  font-family: ${fontFamily.mono};
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.fgMuted};
`;

const ScoreValue = styled.span`
  font-family: ${fontFamily.display};
  font-size: ${fontSize['3xl']};
  font-weight: ${weight.bold};
  color: ${({ theme }) => theme.accent};
  line-height: 1;
`;

const Finder = styled.button`
  position: absolute;
  top: ${({ $x }) => $x}%;
  right: ${({ $y }) => $y}%;
  height: 75px;
  width: 75px;
  border: none;
  background: #000;
  border-radius: 50%;
  z-index: 4;
  cursor: pointer;
  &:hover {
    background-image: url('./assets/images/bitmoji.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: transparent;
  }
`;

const RulesWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space['2']};
  max-width: 480px;
`;

const RuleLabel = styled.span`
  font-family: ${fontFamily.mono};
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.fgMuted};
`;

const RuleTitle = styled.h2`
  margin: 0;
  font-family: ${fontFamily.display};
  font-size: ${fontSize['3xl']};
  font-weight: ${weight.bold};
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.fg};
`;

const RuleP = styled.p`
  margin: 0;
  color: ${({ theme, $faint }) => ($faint ? theme.fgFaint : theme.fgMuted)};
  font-size: ${({ $faint }) => ($faint ? fontSize.sm : fontSize.base)};
  line-height: 1.5;
`;
