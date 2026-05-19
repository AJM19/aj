import styled from 'styled-components';
import { useRef, useState } from 'react';
import { ProjectPage } from '../../components/ProjectPage';
import Modal from '../../components/Modal';
import { fontFamily, fontSize, motion, space } from '../../styles/tokens';

const SCREENS = [
  { src: './assets/univend/SplashScreen.jpg', alt: 'Splash screen' },
  { src: './assets/univend/ChoosingUniversity.jpg', alt: 'Select campus' },
  { src: './assets/univend/Map-MainMenu.jpg', alt: 'Map main menu' },
  { src: './assets/univend/Search.jpg', alt: 'Search' },
  { src: './assets/univend/List.jpg', alt: 'List view' },
  { src: './assets/univend/Filter.jpg', alt: 'Filter' },
  { src: './assets/univend/Key-Info.jpg', alt: 'Info key' },
  { src: './assets/univend/Settings.jpg', alt: 'Settings' },
];

const Univend = () => {
  const carousel = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(SCREENS[0].src);

  const scroll = (dir) => {
    if (!carousel.current) return;
    carousel.current.scrollBy({
      left: dir * 280,
      behavior: 'smooth',
    });
  };

  const openImage = (src) => {
    setCurrentImage(src);
    setModalOpen(true);
  };

  return (
    <ProjectPage
      eyebrow="prototype"
      title="Univend"
      year="2020"
      lede="A mobile prototype for finding snack, drink, and water-fountain machines across a college campus. Filter by item, location, or type — built originally as a senior design exercise."
    >
      <SectionLabel>Hi-fidelity mockups · click to zoom</SectionLabel>
      <CarouselWrap>
        <ScrollBtn onClick={() => scroll(-1)} aria-label="Scroll left">
          ←
        </ScrollBtn>
        <Carousel ref={carousel}>
          {SCREENS.map((s) => (
            <Screen
              key={s.src}
              src={s.src}
              alt={s.alt}
              onClick={() => openImage(s.src)}
            />
          ))}
        </Carousel>
        <ScrollBtn onClick={() => scroll(1)} aria-label="Scroll right">
          →
        </ScrollBtn>
      </CarouselWrap>

      <Modal
        isOpen={isModalOpen}
        closeModal={() => setModalOpen(false)}
        content={<PopupImage src={currentImage} alt="Univend screen" />}
      />
    </ProjectPage>
  );
};

export default Univend;

const SectionLabel = styled.p`
  margin: 0 0 ${space['3']};
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.sm};
  color: ${({ theme }) => theme.fgMuted};
`;

const CarouselWrap = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: ${space['2']};
`;

const ScrollBtn = styled.button`
  width: 40px;
  height: 40px;
  background: transparent;
  color: ${({ theme }) => theme.fg};
  border: 1px solid ${({ theme }) => theme.ruleStrong};
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.lg};
  cursor: pointer;
  transition: border-color ${motion.base} ${motion.ease}, color ${motion.base} ${motion.ease};

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
  }
`;

const Carousel = styled.div`
  display: flex;
  gap: ${space['2']};
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;
  scroll-behavior: smooth;
  padding-bottom: ${space['1']};
`;

const Screen = styled.img`
  height: 480px;
  width: auto;
  flex: 0 0 auto;
  border: 1px solid ${({ theme }) => theme.rule};
  scroll-snap-align: start;
  cursor: zoom-in;
  transition: border-color ${motion.base} ${motion.ease}, transform ${motion.base} ${motion.ease};

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    transform: translateY(-2px);
  }

  @media (max-width: 640px) {
    height: 360px;
  }
`;

const PopupImage = styled.img`
  max-height: 80vh;
  max-width: 90vw;
  height: auto;
  width: auto;
`;
