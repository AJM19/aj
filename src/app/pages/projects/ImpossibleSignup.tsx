import styled from 'styled-components';
import Layout from '../../components/Layout';
import { useState } from 'react';

const ImpossibleSignup = () => {
  const [isWild, setIsWild] = useState(false);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const [attempts, setAttempts] = useState(0);

  const mouseEnter = () => {
    if (!isWild) {
      setIsWild(true);
    }

    const randTop = Math.random() * 100;
    const randLeft = Math.random() * 100;

    setTop(randTop);
    setLeft(randLeft);
    setAttempts(attempts + 1);
  };

  console.log('attempts: ', attempts);

  return (
    <Layout>
      <StyledContainer>
        <SignUpContainer>
          {attempts === 3 && <TeaseText>Almost got it!</TeaseText>}
          {attempts === 5 && <TeaseText>Keep Trying!</TeaseText>}
          {attempts === 7 && <TeaseText>Next one you'll get it!</TeaseText>}
          {attempts === 10 && <TeaseText>Getting embarrassing...</TeaseText>}
          {attempts >= 15 && <TeaseText>Just give up...</TeaseText>}
          <h1>Sign Up</h1>
          <hr />
          <input placeholder="Username" />
          <input type="password" placeholder="Password" />
          <WildButton
            isWild={isWild}
            top={top}
            left={left}
            onMouseEnter={mouseEnter}
            onClick={mouseEnter}
          >
            Submit
          </WildButton>
        </SignUpContainer>
      </StyledContainer>
    </Layout>
  );
};

export default ImpossibleSignup;

const TeaseText = styled.p`
  position: absolute;
  top: 15px;
  font-family: Quicksand;
  color: #0e7de9;
  font-size: 25px;
  font-weight: bold;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const SignUpContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  height: 500px;
  width: 80%;
  margin: auto;

  background: linear-gradient(0deg, #fff9f9, #68eeef);
  border-radius: 25px;
  box-shadow: 3px 9px 17px -4px #22292b;

  h1 {
    margin: 0;
    font-size: 50px;
    font-family: Sansita;
  }

  hr {
    border: 1px solid #9f7fa6;
    width: 100px;
    border-radius: 25px;
  }

  input {
    border: 2px solid #0e7de9;
    border-radius: 15px;
    background: white;
    height: 25px;
    width: 200px;
    margin-bottom: 10px;
    padding-left: 5px;
    box-shadow: 3px 9px 17px -4px #22292b;
    cursor: pointer;
    font-family: Sansita;
  }

  input::placeholder {
    color: lightgrey;
  }

  input:focus {
    outline: none;
    border: 2px solid #0e7de9;
  }
`;

const WildButton = styled.button<{
  isWild: boolean;
  top: number;
  left: number;
}>`
  background: white;
  color: #0e7de9;
  box-shadow: 3px 9px 17px -4px #22292b;
  border: 1px solid #0e7de9;
  width: 100px;
  height: 30px;
  border-radius: 15px;
  font-size: 16px;
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: Sansita;

  :hover {
    background: #0e7de9;
    color: white;
  }

  ${({ isWild, top, left }) =>
    isWild &&
    `
    position: absolute;
    top: ${top}%;
    left: ${left}%;
  `}
`;
