import Layout from '../components/Layout';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Journey from '../components/Journey';
import { useState, useEffect, useRef } from 'react';
import Contact from '../components/Contact';

import {
  Button,
  FlexColumn,
  FlexRow,
  Header1,
  SubHeader1,
} from '../styles/styledcomps';

const HomePage = () => {
  const [isJourneySelected, setJourneySelected] = useState(false);
  const [isContactShowing, setContactShowing] = useState(false);

  const journeyRef = useRef(null);
  const contactRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (isJourneySelected && journeyRef.current) {
        journeyRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    handleScroll();
  }, [isJourneySelected, journeyRef]);

  useEffect(() => {
    const handleScroll = () => {
      if (isContactShowing && contactRef.current) {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    handleScroll();
  }, [isContactShowing, contactRef]);

  return (
    <Layout>
      <ProfileSection>
        <WelcomeSection>
          <FlexColumn>
            <Header1 withAnimation={true} color="#1b7fcc">
              Hi, I'm AJ Milbauer
            </Header1>
            <FlexRow>
              <SubHeader1 withAnimation={true}>
                A Front-end Developer passionate about creating web applications
                for all to enjoy.
              </SubHeader1>
            </FlexRow>
          </FlexColumn>
          <FlexRow gap="3px">
            <StyledLink to="/resume">
              <Button>Resume</Button>
            </StyledLink>
            {!isJourneySelected && (
              <Button
                onClick={() => {
                  setJourneySelected(true);
                }}
              >
                Follow my journey...
              </Button>
            )}
            {!isContactShowing && (
              <Button
                onClick={() => {
                  setContactShowing(true);
                }}
              >
                Contact Me!
              </Button>
            )}
          </FlexRow>
        </WelcomeSection>
        <ImageContainer>
          <IconContainer top="-10%">
            <StyledImage src={'./assets/images/react.png'} alt="react" />
          </IconContainer>
          <IconContainer left="-10%">
            <StyledImage src={'./assets/images/html.png'} alt="react" />
          </IconContainer>
          <IconContainer bottom="-10%">
            <StyledImage src={'./assets/images/javascript.png'} alt="react" />
          </IconContainer>
          <IconContainer right="-10%">
            <StyledImage src={'./assets/images/css3.png'} alt="react" />
          </IconContainer>
          <Bitmoji
            position="absolute"
            src={'./assets/images/bitmoji-computer.png'}
            alt="something else"
          />
        </ImageContainer>
      </ProfileSection>
      {isJourneySelected && (
        <div ref={journeyRef}>
          <Journey />
        </div>
      )}
      {isContactShowing && (
        <div ref={contactRef}>
          <Contact />
        </div>
      )}
    </Layout>
  );
};

export default HomePage;

const popUp = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const ProfileSection = styled.div`
  display: grid;
  height: 70%;
  width: 100%;
  background: white;
  grid-template-columns: 60% 40%;
  align-items: center;
  justify-items: center;
  margin-bottom: 50px;
  margin-top: 50px;
  overflow-x: auto;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: calc(100% + 100px);
  }
`;

const WelcomeSection = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  gap: 10px;
`;

const ImageContainer = styled.div`
  height: 400px;
  width: 400px;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  border: 4px solid #1b7fcc;
  position: relative;
  animation: ${popUp} 1s ease-out;

  @media (max-width: 800px) {
    height: 300px;
    width: 300px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  background: white;
  border: 2px dashed #1b7fcc;
  position: absolute;
  border-radius: 100%;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};

  @media (max-width: 500px) {
    height: 65px;
    width: 65px;
  }
`;

const StyledImage = styled.img`
  height: 65px;
  width: 65px;

  @media (max-width: 500px) {
    height: 40px;
    width: 40px;
  }
`;

const Bitmoji = styled.img`
  height: 250px;
  width: 250px;

  @media (max-width: 500px) {
    height: 100px;
    width: 100px;
  }
`;

const StyledLink = styled(Link)`
  width: fit-content;
  text-decoration: none;
`;
