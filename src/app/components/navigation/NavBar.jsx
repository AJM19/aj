import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { fontFamily, fontSize, layout, motion, space, weight } from '../../styles/tokens';
import { useThemeMode } from '../../styles/ThemeProvider';

const NAV_ITEMS = [
  { to: '/home', label: '/home' },
  { to: '/projects', label: '/work' },
  { to: '/resume', label: '/resume' },
  { to: '/case-study', label: '/case-studies' },
];

const NavBar = () => {
  const { mode, toggle } = useThemeMode();
  return (
    <Bar>
      <Inner>
        <Brand to="/home" aria-label="AJ Milbauer — Home">
          <BrandMark>[aj]</BrandMark>
          <BrandName>milbauer</BrandName>
        </Brand>

        <Links>
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.to} to={item.to}>
              {item.label}
            </NavItem>
          ))}
        </Links>

        <Tools>
          <External href="https://github.com/AJM19/aj" aria-label="GitHub">
            github
          </External>
          <External
            href="https://www.linkedin.com/in/aj-milbauer/"
            aria-label="LinkedIn"
          >
            linkedin
          </External>
          <ThemeToggle
            onClick={toggle}
            aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
          >
            [{mode === 'dark' ? 'dark' : 'light'}]
          </ThemeToggle>
        </Tools>
      </Inner>
    </Bar>
  );
};

export default NavBar;

const Bar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${layout.navHeight};
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'rgba(10, 11, 14, 0.72)'
      : 'rgba(255, 255, 255, 0.72)'};
  backdrop-filter: saturate(160%) blur(10px);
  -webkit-backdrop-filter: saturate(160%) blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.rule};
  z-index: 100;
`;

const Inner = styled.div`
  height: 100%;
  max-width: ${layout.contentMaxWidth};
  margin: 0 auto;
  padding: 0 ${layout.contentPadding};
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: ${space['3']};

  @media (max-width: 768px) {
    padding: 0 ${space['3']};
    grid-template-columns: auto 1fr auto;
  }
`;

const Brand = styled(Link)`
  display: inline-flex;
  align-items: baseline;
  gap: ${space['1']};
  font-family: ${fontFamily.mono};
  color: ${({ theme }) => theme.fg};
`;

const BrandMark = styled.span`
  font-size: ${fontSize.sm};
  font-weight: ${weight.bold};
  color: ${({ theme }) => theme.accent};
`;

const BrandName = styled.span`
  font-size: ${fontSize.sm};
  font-weight: ${weight.medium};
  letter-spacing: 0.02em;

  @media (max-width: 540px) {
    display: none;
  }
`;

const Links = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${space['3']};

  @media (max-width: 768px) {
    gap: ${space['1_5']};
  }

  @media (max-width: 560px) {
    justify-content: flex-end;
    overflow-x: auto;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const linkBase = `
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.sm};
  letter-spacing: 0.02em;
`;

const NavItem = styled(NavLink)`
  ${linkBase};
  color: ${({ theme }) => theme.fgMuted};
  padding: ${space['0_5']} ${space['1']};
  border-bottom: 1px solid transparent;
  transition: color ${motion.base} ${motion.ease}, border-color ${motion.base} ${motion.ease};
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.fg};
  }

  &.active {
    color: ${({ theme }) => theme.fg};
    border-bottom-color: ${({ theme }) => theme.accent};
  }
`;

const Tools = styled.div`
  display: flex;
  align-items: center;
  gap: ${space['2']};

  @media (max-width: 768px) {
    gap: ${space['1_5']};
  }
`;

const External = styled.a.attrs({ target: '_blank', rel: 'noreferrer' })`
  ${linkBase};
  color: ${({ theme }) => theme.fgMuted};
  transition: color ${motion.base} ${motion.ease};
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.fg};
  }

  @media (max-width: 540px) {
    display: none;
  }
`;

const ThemeToggle = styled.button`
  ${linkBase};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.ruleStrong};
  color: ${({ theme }) => theme.fg};
  padding: ${space['0_5']} ${space['1']};
  cursor: pointer;
  transition: border-color ${motion.base} ${motion.ease}, color ${motion.base} ${motion.ease};

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.accent};
  }
`;
