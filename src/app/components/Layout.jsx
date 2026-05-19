import NavBar from './navigation/NavBar';
import styled from 'styled-components';
import { layout } from '../styles/tokens';

const Layout = ({ children }) => {
  return (
    <Shell>
      <NavBar />
      <Main>{children}</Main>
    </Shell>
  );
};

export default Layout;

const Shell = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.fg};
`;

const Main = styled.main`
  flex: 1 1 auto;
  padding-top: ${layout.navHeight};
`;
