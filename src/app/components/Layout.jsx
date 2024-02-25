import React, { useState } from 'react';
import NavBar from './navigation/NavBar';
import styled, { keyframes } from 'styled-components';

const generateStarPositions = () => {
  const stars = [];
  for (let i = 0; i < 200; i++) {
    stars.push({
      styles: {
        left: `${Math.floor(Math.random() * 101)}%`,
        top: `${Math.floor(Math.random() * 101)}%`,
        width: (i % 2) + 2 + 'px',
        height: (i % 2) + 2 + 'px',
      },
      interval: getRandomInterval(),
    });
  }
  return stars;
};

const getRandomInterval = () => {
  return Math.ceil(Math.random() * 5 + 1);
};

const Layout = ({
  children,
  background = 'linear-gradient(191deg, #54aef3, #0461a9)',
  isStarWars = false,
}) => {
  const [stars] = useState(generateStarPositions());

  return (
    <StyledContainer isStarWars={isStarWars} background={background}>
      {isStarWars &&
        stars.map((star, index) => (
          <Star interval={star.interval} key={index} style={star.styles} />
        ))}
      <NavBar />
      <StyledContent>{children}</StyledContent>
    </StyledContainer>
  );
};

export default Layout;

const blink = keyframes`
    0% {
        opacity: 0;
    }

    50% {
        opacity: 0.8;
    }

    100%{
      opacity: 0;
    }
`;

const StyledContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 60px auto;
  height: 100vh;
  overflow: hidden;
  background: ${({ background }) => background};

  ${({ isStarWars }) =>
    isStarWars &&
    `
      :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
      }
  `}
`;

const StyledContent = styled.main`
  overflow-y: auto;
  flex-grow: 1;
`;

const Star = styled.div`
  position: absolute;
  border-radius: 100%;
  background-color: white;
  pointer-events: none;
  box-shadow: -2px 3px 20px 1px #c9ba4d;

  animation: ${blink} ${({ interval }) => interval}s infinite;
`;
