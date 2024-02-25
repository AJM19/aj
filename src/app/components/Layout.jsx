import React, { useEffect, useState } from 'react';
import NavBar from './navigation/NavBar';
import styled from 'styled-components';

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
  width: 1px;
  height: 1px;
  background-color: white;
  pointer-events: none;
`;

const generateStarPositions = () => {
  const stars = [];
  for (let i = 0; i < 50; i++) {
    stars.push({
      left: `${Math.floor(Math.random() * 101)}%`,
      top: `${Math.floor(Math.random() * 101)}%`,
    });
  }
  return stars;
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
        stars.map((star, index) => <Star key={index} style={star} />)}
      <NavBar />
      <StyledContent>{children}</StyledContent>
    </StyledContainer>
  );
};

export default Layout;
