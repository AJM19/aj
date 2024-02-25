import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { colors } from '../styles/styledcomps';

const ProjectCard = ({
  name,
  titleColor,
  mainColor,
  background,
  logo,
  year,
  logoColor = 'white',
  description,
  link,
  isSmallLogo = false,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      {!isFlipped ? (
        <Card onClick={handleClick} isFlipped={isFlipped}>
          <Logo isSmallLogo={isSmallLogo} color={logoColor} logo={logo} />
          <Frame background={background} color={mainColor} />
          <NamePlate color={titleColor}>
            <NameText>{name}</NameText>
            <YearText>({year})</YearText>
          </NamePlate>
        </Card>
      ) : (
        <Card onClick={handleClick} isFlipped={isFlipped}>
          <Frame isFlipped={isFlipped} color={mainColor}>
            <CardHeader color="white">{name}</CardHeader>
            <DescriptionText>{description}</DescriptionText>
            <StyledLink to={link}>
              <ContinueButton isFlipped={isFlipped}>Continue</ContinueButton>
            </StyledLink>
          </Frame>
        </Card>
      )}
    </div>
  );
};

export default ProjectCard;

const Card = styled.div`
  position: relative;
  display: flex;
  height: 500px;
  background: #c5a34c;
  border-radius: 1px;
  box-shadow: 5px 6px 3px 0px #00000042;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid black;

  transition: transform 1s;
  transform-style: preserve-3d;

  background-image: url('./assets/images/woodBackground.jpg');

  ${({ isFlipped }) =>
    isFlipped &&
    `  
     transform: rotateY(180deg);
    `};
`;

const Logo = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 100%;
  top: 15px;
  left: 15px;
  height: 100px;
  width: 100px;
  background: ${(props) => props.color};
  z-index: 5;

  border: 1px solid white;

  background-image: url(${(props) => props.logo});
  background-repeat: no-repeat;
  background-size: ${({ isSmallLogo }) => (isSmallLogo ? '80%' : '100%')};
  background-position: center;
`;

const NamePlate = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  bottom: 25px;
  right: 15px;
  height: 50px;
  width: 170px;
  background: ${(props) => props.color};
  z-index: 5;
  color: white;
  font-size: 12px;
`;

const NameText = styled.p`
  color: white;
  font-family: Sigmar One;
  font-size: 16px;
  margin: 0;
  text-align: center;
  line-height: 100%;
`;

const YearText = styled.p`
  color: white;
  font-family: Sigmar One;
  font-size: 12px;
  margin: 0;
`;

const Frame = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: 1fr 2fr 2fr;
  gap: 5px;

  position: relative;
  width: 300px;
  height: 450px;
  background-image: url(${(props) => props.background});
  background-color: ${(props) => props.color};
  margin: 15px;
  z-index: 1;
  border: 1px double black;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: left;

  ${({ isFlipped }) =>
    !isFlipped &&
    `  
      ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-top: 50px solid black;
    border-left: 50px solid transparent;
    rotate: -90deg;
    z-index: 3;
  }

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-top: 50px solid black;
    border-left: 50px solid transparent;
    rotate: 90deg;
    z-index: 3;
  }
    `};

  ${({ isFlipped }) =>
    isFlipped &&
    `  
     transform: rotateY(180deg);
    `};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: fit-content;
`;

const ContinueButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  background: ${colors.darkBlue};
  color: white;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;

  :hover {
    background: white;
    color: ${colors.darkBlue};
    border: 1px solid ${colors.darkBlue};
  }
`;

const DescriptionText = styled.p`
  margin: 0;
  display: inline-flex;
  width: fit-content;
  font-family: Barlow;
  text-align: center;
  color: white;
  font-size: 14px;
  padding: 0 15px;
`;

const CardHeader = styled.h1`
  color: white;
  width: fit-content;
  font-family: Barlow;
  margin: 0;
  font-weight: 800;
  display: inline-flex;
  font-size: 33px;
  text-decoration: underline;
  text-align: center;
`;
