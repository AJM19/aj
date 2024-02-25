import Layout from '../../components/Layout';
import styled, { css, keyframes } from 'styled-components';
import { useState, useRef, useEffect } from 'react';

const StarWarsIntro = () => {
  const [storyTexts, setStoryTexts] = useState<string[]>([]);
  const [inputText, setInputText] = useState('');

  const audioElement = useRef(null);

  const send = () => {
    const newText = inputText.trim();
    if (newText !== '') {
      setStoryTexts((prevTexts) => [...prevTexts, newText]);
      setInputText('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      send();
    }
  };

  return (
    <Layout isStarWars={true} background={'black'}>
      <StyledContainer>
        <IntroText>
          Not a long time ago on a portfolio, right here....
        </IntroText>
        {storyTexts.map((text, index) => (
          <StoryText key={index}>{text}</StoryText>
        ))}
        <ActionContainer>
          <InputContainer>
            <StyledInput
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type here... (enter to send)"
              maxLength={200}
            />
            <CharacterCount>{inputText.length}/200</CharacterCount>
          </InputContainer>
          <StyledAudio
            ref={audioElement}
            src="./assets/audio/star-wars-theme.mp3"
            autoPlay
            controls
            loop
          />
        </ActionContainer>
      </StyledContainer>
    </Layout>
  );
};

export default StarWarsIntro;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;

  * {
    font-family: Pathway Gothic One;
  }
`;

const moveUpward = keyframes`
    from {
        transform: translateY(10vh) scale(1) perspective(500px) rotateX(30deg);
    }

    to {
        transform: translateY(-100vh) scale(0.2) perspective(500px) rotateX(30deg);
        opacity: 0.1
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
        display: none;
    }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
        display:none;
    }

    to {
        opacity: 1;
        display: inline-flex;
    }
`;

const moveUpAnimation = css`
  ${moveUpward} 20s ease-out forwards;
`;

const StoryText = styled.p`
  font-size: 60px;
  font-weight: 700;
  margin: 0;
  color: #c29a00;
  position: fixed;
  bottom: 0;
  width: 75%;
  max-width: 800px;
  animation: ${moveUpAnimation};
  word-spacing: 8px;
  white-space: break-spaces;
  word-break: break-all;
`;

const IntroText = styled.p`
  color: #11d4fa;
  -webkit-text-stroke: #092593;
  -webkit-text-stroke-width: 1px;
  margin: 0;
  font-size: 50px;
  font-weight: 500;
  text-align: center;
  width: 100%;
  animation: ${fadeOut} 7s ease-out forwards;
`;

const ActionContainer = styled.div`
  position: absolute;
  bottom: 25px;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;

  animation: ${fadeIn} 8s ease-in forwards;
`;

const StyledInput = styled.input`
  position: relative;
  background: lightgray;
  border: 1px solid #c29a00;
  width: 500px;
  height: 40px;
  border-radius: 8px;
  font-weight: 500;
`;

const CharacterCount = styled.label`
  position: absolute;
  bottom: 5px;
  right: 8px;
  color: black;
  opacity: 0.5;
  font-size: 10px;
  font-weight: bold;
`;

const InputContainer = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
`;

const StyledAudio = styled.audio`
  width: 120px;
  height: 45px;
`;
