import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components';
import { fontFamily, fontSize } from '../styles/tokens';

const Loader = () =>
  createPortal(
    <Wrap data-test-id="main-loader">
      <Spinner />
      <Label>loading</Label>
    </Wrap>,
    document.body
  );

export default Loader;

const Wrap = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999999;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.bg};
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid ${({ theme }) => theme.rule};
  border-top-color: ${({ theme }) => theme.accent};
  border-radius: 50%;
  animation: ${spin} 800ms linear infinite;
`;

const Label = styled.span`
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.xs};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.fgMuted};
`;
