import { createGlobalStyle } from 'styled-components';
import { fontFamily, fontSize, lineHeight, motion } from './tokens';
import { Theme } from './themes';

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.fg};
    font-family: ${fontFamily.sans};
    font-size: ${fontSize.base};
    line-height: ${lineHeight.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    transition: background ${motion.base} ${motion.ease}, color ${motion.base} ${motion.ease};
  }

  ::selection {
    background: ${({ theme }) => theme.selection};
    color: ${({ theme }) => theme.fg};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.rule};
    border-radius: 999px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.ruleStrong};
  }
`;
