import { useState } from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import { BodyText, colors, FlexColumn } from '../../styles/styledcomps';
import Modal from '../../components/Modal';

const FindersKeepers = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isModalOpen, setModalOpen] = useState(true);

  const [iconLocation, setIconLocation] = useState({ x: 50, y: 50 });

  const [timesFound, setTimesFound] = useState(0);

  const randomizeIconLocation = () => {
    setIconLocation({
      x: Math.floor(Math.random() * 51) + 25,
      y: Math.floor(Math.random() * 51) + 25,
    });
    setTimesFound(timesFound + 1);
  };

  const handleMouseMove = (event) => {
    setCoords({
      x: event.clientX,
      y: event.clientY,
    });

    document.documentElement.style.setProperty('--cursorX', coords.x + 'px');
    document.documentElement.style.setProperty('--cursorY', coords.y + 'px');
  };

  return (
    <Layout>
      <Modal
        isOpen={isModalOpen}
        closeModal={() => {
          setModalOpen(false);
        }}
        content={
          <FlexColumn alignItems="center" gap="20px">
            <FlexColumn>
              <BodyText color="red">DISCLAIMER:</BodyText>
              <BodyText color="red">
                This project will not work properly unless you are using a
                laptop/desktop. A mouse is required for interactivity.
              </BodyText>
            </FlexColumn>

            <BodyText
              style={{ fontSize: '20px', fontWeight: 'bold' }}
              color={colors.mainBlue}
            >
              Rules:
            </BodyText>
            <BodyText color={colors.darkBlue}>
              Use your mouse as a flashlight to locate me!
            </BodyText>
            <BodyText color={colors.darkBlue}>
              Each time you find me, click the icon, and the icon will then be
              sent to a new random location.
            </BodyText>
            <BodyText color={colors.darkBlue}>
              Try to find me as many times as possible!
            </BodyText>
            <BodyText>
              {'(Click out of this pop-up and hover over screen to begin)'}
            </BodyText>
          </FlexColumn>
        }
      />
      <StyledContainer>
        <Flashlight onMouseMove={handleMouseMove}>
          <ScoreBoard>
            <BodyText style={{ fontSize: '40px' }} color={colors.mainBlue}>
              Score: {timesFound}
            </BodyText>
          </ScoreBoard>
        </Flashlight>
        <StyledFinder
          x={iconLocation.x}
          y={iconLocation.y}
          onClick={randomizeIconLocation}
        />
      </StyledContainer>
    </Layout>
  );
};

export default FindersKeepers;

const ScoreBoard = styled.div`
  display: flex;
  position: absolute;
  width: 250px;
  height: 40px;
  background: white;
  border-radius: 10px;
  border: 1px solid ${colors.darkBlue};
  padding: 5px 15px;
  top: 15px;
  left: 15px;
  align-items: center;
  justify-content: center;
`;

const StyledFinder = styled.button`
  position: absolute;
  top: ${(props) => props.x}%;
  right: ${(props) => props.y}%;
  height: 75px;
  width: 75px;
  border-radius: 100%;
  border: none;
  background: black;
  :hover {
    background: white;
    background-image: url('./assets/images/bitmoji.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

const StyledContainer = styled.div`
  position: relative;
  height: 100%;
`;

const Flashlight = styled.div`
  height: 100%;
  position: relative;
  background: radial-gradient(
    circle 7vmax at var(--cursorX) var(--cursorY),
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%,
    rgba(0, 0, 0, 0.95) 100%
  );
`;
