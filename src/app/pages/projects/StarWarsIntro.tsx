import Layout from '../../components/Layout';
import styled, { css, keyframes } from 'styled-components';
import { useState } from 'react';

const StarWarsIntro = () => {
  const [storyTexts, setStoryTexts] = useState<string[]>([]);
  const [inputText, setInputText] = useState('');

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
          On a portfolio website, in a galaxy not so far away...
        </IntroText>
        {storyTexts.map((text, index) => (
          <StoryText key={index}>{text}</StoryText>
        ))}
        <ActionContainer>
          <StyledInput
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type here..."
          />
          <SendButton onClick={send}>
            <p>Send</p>
          </SendButton>
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
    font-family: Barlow;
  }
`;

const moveUpward = keyframes`
    from {
        transform: translateY(100%);
        opacity: 1;
    }

    to {
        transform: translateY(-100vh) ;
        opacity: 0.2;
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
  ${moveUpward} 10s ease-out forwards;
`;

const StoryText = styled.p`
  font-size: 54px;
  font-weight: bold;
  margin: 0;
  text-align: left;
  color: #c29a00;
  position: fixed;
  bottom: 0;
  width: 400px;
  animation: ${moveUpAnimation};
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
  animation: ${fadeOut} 5s ease-out forwards;
`;

const ActionContainer = styled.div`
  position: absolute;
  bottom: 25px;
  width: 100%;
  align-items: center;
  justify-content: center;

  animation: ${fadeIn} 6s ease-in forwards;
`;

const StyledInput = styled.input`
  margin: 0 25px;
  background: lightgray;
  border: 1px solid #c29a00;
  width: 500px;
  height: 25px;
  border-radius: 8px;
  font-weight: 500;
`;

const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  background: #c29a00;
  border-radius: 25px;
  width: 100px;
  padding: 5px 10px;
  height: 25px;

  p {
    color: white;
    font-size: 18px;
    font-weight: 500;
  }
`;
