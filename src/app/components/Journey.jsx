import styled, { keyframes } from 'styled-components';
import { colors, BodyText, FlexColumn, FlexRow } from '../styles/styledcomps';
import { useState } from 'react';

const Journey = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <StyledContainer id="journey">
      {activeTab !== 0 && (
        <NavButton
          onClick={() => {
            setActiveTab(activeTab - 1);
          }}
          top="50%"
          left={'3%'}
        >
          {'<'}
        </NavButton>
      )}
      {activeTab !== 2 && (
        <NavButton
          onClick={() => {
            setActiveTab(activeTab + 1);
          }}
          top="50%"
          right={'3%'}
        >
          {'>'}
        </NavButton>
      )}
      <Header color={colors.mainBlue}>Developer Journey</Header>
      {activeTab === 0 && (
        <SectionContainer>
          <FlexColumn gap="5px" id="tab1" alignItems="center">
            <FlexRow>
              <Title color="#ee7132">University</Title>
              <Title color="#015030">&nbsp;of&nbsp;</Title>
              <Title color="#ee7132">Miami</Title>
            </FlexRow>

            <BodyText color={colors.mainBlue}>2017 - 2021</BodyText>
            <StyledImage
              height={'100px'}
              width={'150px'}
              src={'./assets/images/UM.png'}
              alt="UM"
            />
            <BodyText style={{ textAlign: 'center' }}>
              Bachelors in Computer Science
            </BodyText>
            <BodyText style={{ textAlign: 'center' }}>
              Minors in Game Design & Criminology
            </BodyText>
            <FlexRow margin="10px 0">
              <StyledImage
                height={'50px'}
                width={'50px'}
                src={'./assets/images/java.png'}
                alt="java"
              />
            </FlexRow>
          </FlexColumn>
        </SectionContainer>
      )}
      {activeTab === 1 && (
        <SectionContainer>
          <FlexColumn gap="5px" id="tab1" alignItems="center">
            <Title color={colors.mainBlue}>Capgemini</Title>
            <BodyText style={{ textAlign: 'center' }} color={colors.mainBlue}>
              2021 - 2022
            </BodyText>
            <StyledImage
              height={'130px'}
              width={'130px'}
              src={'./assets/images/capgemini.png'}
              alt="cap"
            />
            <BodyText>Software Engineer</BodyText>
            <FlexRow margin="10px 0">
              <StyledImage
                height={'25px'}
                width={'25px'}
                src={'./assets/images/angular.png'}
                alt="angular"
              />
              <StyledImage
                height={'25px'}
                width={'35px'}
                src={'./assets/images/typescript.png'}
                alt="type"
              />
            </FlexRow>
          </FlexColumn>
        </SectionContainer>
      )}
      {activeTab === 2 && (
        <SectionContainer>
          <FlexColumn gap="5px" id="tab3" alignItems="center">
            <Title color={'#6cad45'}>Junior Golf Hub</Title>
            <BodyText style={{ textAlign: 'center' }} color={colors.mainBlue}>
              2022 - Current
            </BodyText>
            <StyledImage
              height={'150px'}
              width={'150px'}
              src={'./assets/images/jgh.jpg'}
              alt="jgh"
            />
            <BodyText>UI Developer</BodyText>
            <FlexRow margin="10px 0">
              <StyledImage
                height={'55px'}
                width={'55px'}
                src={'./assets/images/react.png'}
                alt="react"
              />
              <StyledImage
                height={'50px'}
                width={'50px'}
                src={'./assets/images/javascript.png'}
                alt="javascript"
              />
            </FlexRow>
          </FlexColumn>
        </SectionContainer>
      )}
      <CircleContainer>
        <FlexRow gap="20px">
          <TabCircle
            onClick={() => {
              setActiveTab(0);
            }}
            isActive={activeTab === 0}
          />
          <TabCircle
            onClick={() => {
              setActiveTab(1);
            }}
            isActive={activeTab === 1}
          />
          <TabCircle
            onClick={() => {
              setActiveTab(2);
            }}
            isActive={activeTab === 2}
          />
        </FlexRow>
      </CircleContainer>
    </StyledContainer>
  );
};

export default Journey;

const popUp = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const StyledContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 450px;
  background: white;
  margin: 50px;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  box-shadow: 5px 4px 9px 1px #73707099;
`;

const StyledImage = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const NavButton = styled.button`
  display: flex;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};

  width: 45px;
  height: 45px;

  background: ${colors.darkBlue};
  color: white;
  border-radius: 100%;
  border: none;
  font-size: 30px;
  font-weight: bold;
  font-family: Barlow;

  justify-content: center;
  align-items: center;

  box-shadow: 1px 1px #ccc6c6;

  @media (max-width: 500px) {
    width: 18px;
    height: 18px;
    font-size: 12px;
  }

  :hover {
    color: ${colors.darkBlue};
    background: white;
    border: 1px solid ${colors.darkBlue};
  }
`;

const SectionContainer = styled.div`
  animation: ${popUp} 1s ease-out;
`;

const Header = styled.h1`
  color: ${(props) => (props.color ? props.color : 'black')};
  width: fit-content;
  font-family: Barlow;
  margin: 0;
  font-weight: 800;
  display: inline-flex;
  font-size: 60px;t
  text-align: center;

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

const Title = styled.p`
  margin: 0;
  display: inline-flex;
  width: fit-content;
  font-family: Barlow;
  font-weight: 500;
  color: ${(props) => (props.color ? props.color : 'black')};
  font-size: 25px;
`;

const TabCircle = styled.div`
  height: 8px;
  width: 8px;

  border-radius: 100%;
  border: 1px solid ${colors.darkBlue};

  background: white;

  ${({ isActive }) =>
    isActive &&
    `  
      background: ${colors.darkBlue};
    `};

  :hover {
    cursor: pointer;
  }
`;

const CircleContainer = styled.div`
  position: absolute;
  bottom: 10px;
`;
