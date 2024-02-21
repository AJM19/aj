import styled from 'styled-components';
import Layout from '../../components/Layout';
import {
  Header1,
  colors,
  SubHeader1,
  FlexColumn,
} from '../../styles/styledcomps';
import { useRef, useEffect, useState } from 'react';
import Modal from '../../components/Modal';

const Univend = () => {
  const container = useRef(null);

  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(
    '../../assets/univend/Key-Info.jpg'
  );

  const scrollLeft = () => {
    container.current.scrollTo({
      left: (container.current.scrollLeft -= 100),
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    container.current.scrollTo({
      left: (container.current.scrollLeft += 100),
      behavior: 'smooth',
    });
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const setAndOpenModal = (url) => {
    setCurrentImage(url);
    setModalOpen(true);
  };

  useEffect(() => {
    //doNothing
  });

  return (
    <Layout>
      <StyledContainer width="80%">
        <Header1 color={colors.mainBlue}>Univend (2020)</Header1>
        <SubHeader1 color={colors.darkBlue}>
          Univend is a mobile-application (prototype) intended to be used by
          college students all over the United States. Univend allows users to
          access useful information about where snack machines, drink machines,
          and water fountains are located on your campus! Search for specific
          foods, drinks or filter your view options. Univend is a user-friendly,
          easy to understand application that fulfills all your vending machine
          inquiries. Let's start snacking!
        </SubHeader1>
      </StyledContainer>
      <StyledContainer width="90%">
        <NavButton onClick={scrollRight} top="50%" right="2%">
          {'>'}
        </NavButton>
        <NavButton onClick={scrollLeft} top="50%" left="2%">
          {'<'}
        </NavButton>
        <FlexColumn alignItems="center">
          <Header1 color={colors.mainBlue}>Hi-Fidelity Mock ups</Header1>
          <SubHeader1 color="#949494">Click to zoom in</SubHeader1>
        </FlexColumn>

        <ImageContainer ref={container}>
          <StyledImage
            onClick={(e) => {
              setAndOpenModal(e.target.src);
            }}
            src={'./assets/univend/SplashScreen.jpg'}
            alt="splashScreen"
          />
          <StyledImage
            onClick={(e) => {
              setAndOpenModal(e.target.src);
            }}
            src={'./assets/univend/ChoosingUniversity.jpg'}
            alt="selectCampus"
          />
          <StyledImage
            onClick={(e) => {
              setAndOpenModal(e.target.src);
            }}
            src={'./assets/univend/Map-MainMenu.jpg'}
            alt="mainMenu"
          />
          <StyledImage
            onClick={(e) => {
              setAndOpenModal(e.target.src);
            }}
            src={'./assets/univend/Search.jpg'}
            alt="search"
          />
          <StyledImage
            onClick={(e) => {
              setAndOpenModal(e.target.src);
            }}
            src={'./assets/univend/List.jpg'}
            alt="listView"
          />
          <StyledImage
            onClick={(e) => {
              setAndOpenModal(e.target.src);
            }}
            src={'./assets/univend/Filter.jpg'}
            alt="filter"
          />
          <StyledImage
            onClick={(e) => {
              setAndOpenModal(e.target.src);
            }}
            src={'./assets/univend/Key-Info.jpg'}
            alt="infoKey"
          />
          <StyledImage
            onClick={(e) => {
              setAndOpenModal(e.target.src);
            }}
            src={'./assets/univend/Settings.jpg'}
            alt="settings"
          />
        </ImageContainer>
      </StyledContainer>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        content={<StyledPopupImage src={currentImage} alt="image" />}
      />
    </Layout>
  );
};

export default Univend;

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  background: white;
  border-radius: 10px;
  margin: 10px auto;
  border: 3px solid ${colors.darkBlue};
  padding-top: 15px;
  align-items: flex-start;
  padding: 10px 15px;
  align-items: center;
  gap: 15px;
  text-align: center;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;
  width: 90%;
  gap: 25px;
  scroll-behavior: smooth;
`;

const StyledImage = styled.img`
  height: 400px;
  width: 250px;
`;

const NavButton = styled.button`
  display: flex;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};

  width: 25px;
  height: 25px;

  background: ${colors.darkBlue};
  color: white;
  border-radius: 100%;
  border: none;
  font-size: 22px;
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

const StyledPopupImage = styled.img`
  height: 500px;
  width: 250px;
`;
