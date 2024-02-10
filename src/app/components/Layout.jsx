import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background: #1b7fcc;
`;

const StyledContent = styled.main`
  overflow-y: auto;
  flex-grow: 1;
`;

const Layout = ({ children }) => {
  return (
    <StyledContainer>
      <NavBar />
      <StyledContent>{children}</StyledContent>
    </StyledContainer>
  );
};

export default Layout;
