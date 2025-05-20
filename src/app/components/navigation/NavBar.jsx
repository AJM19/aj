import styled, { keyframes } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { colors } from '../../styles/styledcomps';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <StyledBar>
      <StyledName onClick={() => navigate('/home')}>AJ Milbauer</StyledName>
      <StyledAbbrv onClick={() => navigate('/home')}>AJM</StyledAbbrv>

      <NavSection style={{ justifyContent: 'end' }}>
        <StyledLink to="/home">Home</StyledLink>
        <StyledLink to="/resume">Resume</StyledLink>
        <StyledLink to="/case-study">Case Studies</StyledLink>
        <StyledLink to="/projects">Projects</StyledLink>
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
      </NavSection>
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
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  border-bottom: 2px solid ${colors.darkBlue};
  z-index: 500;
`;

const StyledLink = styled(Link)`
  display: flex;
  width: 100%;
  font-size: 18px;
  color: ${colors.darkBlue};
  text-decoration: none;
  width: fit-content;
  font-family: Barlow;
  font-weight: 400;
  margin: 0;
`;

const StyledImage = styled.img`
  height: 30px;
  width: 30px;

  @media (max-width: 500px) {
    height: 20px;
    width: 20px;
  }
`;

const NavSection = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5%;
  margin: 0 15px;
`;

const StyledName = styled.p`
  font-family: Quicksand;
  color: ${colors.darkBlue};
  font-weight: 700;
  margin: 0 0 0 15px;
  font-size: 24px;

  cursor: pointer;

  @media (max-width: 700px) {
    display: none;
  }
`;

const StyledAbbrv = styled.p`
  display: none;

  @media (max-width: 700px) {
    display: block;
    font-family: Quicksand;
    color: ${colors.darkBlue};
    font-weight: 700;
    margin: 0 0 0 15px;
    font-size: 24px;
  }
`;
