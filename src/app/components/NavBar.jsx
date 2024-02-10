import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, FlexRow } from '../styles/styledcomps';

const NavBar = () => {
  return (
    <StyledBar>
      <StyledLink to="/home">Home</StyledLink>
      <StyledLink to="/resume">Resume</StyledLink>
      <StyledLink to="/projects">Projects</StyledLink>
      <FlexRow margin="0 10px" gap="15px">
        <StyledLink to="https://github.com/AJM19/aj">
          <StyledImage
            height="50px"
            src={'./assets/images/github.png'}
            alt="react"
          />
        </StyledLink>
        <StyledLink to="https://www.linkedin.com/in/aj-milbauer/">
          <StyledImage
            height="50px"
            src={'./assets/images/linkedin.png'}
            alt="react"
          />
        </StyledLink>
      </FlexRow>
    </StyledBar>
  );
};

export default NavBar;

export const flyIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const StyledBar = styled.div`
  display: grid;
  height: 60px;
  width: 100%;
  background: white;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 5fr;
  gap: 25px;
  justify-items: end;
  border-bottom: 2px solid ${colors.darkBlue};

  @media (max-width: 500px) {
    height: 80px;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  width: 100%;
  font-size: 22px;
  color: ${colors.darkBlue};
  text-decoration: none;
  width: fit-content;
  font-family: Quicksand;
  margin-left: 10px;
  font-weight: 700;
`;

const StyledImage = styled.img`
  height: 30px;
  width: 30px;

  @media (max-width: 500px) {
    height: 20px;
    width: 20px;
  }
`;
