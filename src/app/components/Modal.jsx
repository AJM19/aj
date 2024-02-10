import { memo } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Modal = ({ content, isOpen, closeModal }) => {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <StyledContainer onClick={closeModal}>
      <StyledWindow onClick={(event) => event.stopPropagation()}>
        <StyledContent>{content}</StyledContent>
      </StyledWindow>
    </StyledContainer>,
    document.body
  );
};

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;

const StyledWindow = styled.div`
  width: 300px;
  background: white;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledContent = styled.div`
  box-sizing: border-box;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default memo(Modal);
