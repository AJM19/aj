import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { colors } from '../styles/styledcomps';

const Loader = () =>
  createPortal(
    <StyledLoader data-test-id="main-loader">
      <div className="loader" />
    </StyledLoader>,
    document.body
  );

export default Loader;

const StyledLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#1b7fcc, white);

  .loader,
  .loader:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }

  .loader {
    margin: 60px auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid ${colors.mainBlue};
    border-right: 1.1em solid ${colors.mainBlue};
    border-bottom: 1.1em solid ${colors.mainBlue};
    border-left: 1.1em solid ${colors.darkBlue};
    transform: translateZ(0);
    animation: load8 1.1s infinite linear;
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
