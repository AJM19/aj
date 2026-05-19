import { memo } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { fontFamily, fontSize, motion, space } from '../styles/tokens';

const Modal = ({ content, isOpen, closeModal }) => {
  if (!isOpen) return null;
  return createPortal(
    <Backdrop onClick={closeModal}>
      <Dialog onClick={(e) => e.stopPropagation()}>
        <Close onClick={closeModal} aria-label="Close">
          esc / close
        </Close>
        <Body>{content}</Body>
      </Dialog>
    </Backdrop>,
    document.body
  );
};

export default memo(Modal);

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(2px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dialog = styled.div`
  position: relative;
  min-width: min(420px, 90vw);
  max-width: 90vw;
  max-height: 90vh;
  background: ${({ theme }) => theme.bgElevated};
  border: 1px solid ${({ theme }) => theme.ruleStrong};
  padding: ${space['4']};
  overflow: auto;
`;

const Close = styled.button`
  position: absolute;
  top: ${space['1_5']};
  right: ${space['1_5']};
  background: transparent;
  border: none;
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.xs};
  color: ${({ theme }) => theme.fgMuted};
  cursor: pointer;
  transition: color ${motion.base} ${motion.ease};
  letter-spacing: 0.04em;

  &:hover { color: ${({ theme }) => theme.accent}; }
`;

const Body = styled.div`
  padding-top: ${space['3']};
`;
