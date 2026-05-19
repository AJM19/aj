import styled, { css, keyframes } from 'styled-components';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { fontFamily, fontSize, motion, space } from '../../styles/tokens';

const StarWarsIntro = () => {
  const [storyTexts, setStoryTexts] = useState<string[]>([]);
  const [inputText, setInputText] = useState('');
  const audioElement = useRef<HTMLAudioElement>(null);

  const send = () => {
    const trimmed = inputText.trim();
    if (trimmed !== '') {
      setStoryTexts((prev) => [...prev, trimmed]);
      setInputText('');
    }
  };

  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') send();
  };

  return (
    <Galaxy>
      <Stars>
        {Array.from({ length: 120 }).map((_, i) => (
          <Star
            key={i}
            $top={Math.random() * 100}
            $left={Math.random() * 100}
            $delay={Math.random() * 5}
            $size={Math.random() < 0.5 ? 1 : 2}
          />
        ))}
      </Stars>

      <BackLink to="/projects">← back to work</BackLink>

      <IntroText>Not a long time ago on a portfolio, right here....</IntroText>

      {storyTexts.map((text, index) => (
        <StoryText key={index}>{text}</StoryText>
      ))}

      <Controls>
        <InputWrap>
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKey}
            placeholder="Type here... (enter to send)"
            maxLength={200}
          />
          <Count>{inputText.length}/200</Count>
        </InputWrap>
        <audio
          ref={audioElement}
          src="./assets/audio/star-wars-theme.mp3"
          autoPlay
          controls
          loop
        />
      </Controls>
    </Galaxy>
  );
};

export default StarWarsIntro;

const Galaxy = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background: radial-gradient(ellipse at top, #02060f 0%, #000 70%);
  color: #fff;
`;

const blink = keyframes`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`;

const Stars = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`;

const Star = styled.span<{ $top: number; $left: number; $delay: number; $size: number }>`
  position: absolute;
  top: ${({ $top }) => `${$top}%`};
  left: ${({ $left }) => `${$left}%`};
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 4px rgba(255, 255, 255, 0.8);
  animation: ${blink} ${({ $delay }) => 3 + $delay}s infinite ease-in-out;
`;

const BackLink = styled(Link)`
  position: fixed;
  top: ${space['2']};
  left: ${space['3']};
  z-index: 200;
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.sm};
  color: rgba(255, 255, 255, 0.5);
  transition: color ${motion.base} ${motion.ease};

  &:hover { color: #fff; }
`;

const moveUpward = keyframes`
  from {
    transform: translateY(10vh) scale(1) perspective(500px) rotateX(30deg);
  }
  to {
    transform: translateY(-100vh) scale(0.2) perspective(500px) rotateX(30deg);
    opacity: 0.1;
  }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to   { opacity: 0; }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const moveUpAnimation = css`
  ${moveUpward} 20s ease-out forwards;
`;

const StoryText = styled.p`
  font-family: 'Pathway Gothic One', ${fontFamily.display};
  font-size: 60px;
  font-weight: 700;
  margin: 0;
  color: #f5b54a;
  text-shadow: 0 0 8px rgba(245, 181, 74, 0.3);
  position: fixed;
  bottom: 0;
  width: 75%;
  max-width: 800px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${moveUpAnimation};
  word-spacing: 8px;
  white-space: break-spaces;
  text-align: justify;
`;

const IntroText = styled.p`
  position: relative;
  z-index: 10;
  font-family: 'Pathway Gothic One', ${fontFamily.display};
  margin: 0;
  padding-top: 30vh;
  font-size: 44px;
  font-weight: 500;
  text-align: center;
  width: 100%;
  color: #5cd6f5;
  letter-spacing: 0.02em;
  text-shadow: 0 0 12px rgba(92, 214, 245, 0.4);
  animation: ${fadeOut} 7s ease-out forwards;
`;

const Controls = styled.div`
  position: fixed;
  bottom: ${space['3']};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: ${space['2']};
  z-index: 200;
  animation: ${fadeIn} 8s ease-in forwards;
`;

const InputWrap = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: min(420px, 60vw);
  height: 42px;
  padding: 0 ${space['2']};
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(245, 181, 74, 0.6);
  color: #fff;
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.sm};

  &::placeholder { color: rgba(255, 255, 255, 0.4); }
  &:focus {
    outline: none;
    border-color: #f5b54a;
  }
`;

const Count = styled.span`
  position: absolute;
  bottom: 4px;
  right: 8px;
  color: rgba(255, 255, 255, 0.4);
  font-family: ${fontFamily.mono};
  font-size: 10px;
`;
