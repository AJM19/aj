import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { themes, ThemeMode, Theme } from './themes';

const STORAGE_KEY = 'aj-theme';

interface ThemeContextValue {
  mode: ThemeMode;
  theme: Theme;
  toggle: () => void;
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const readInitialMode = (): ThemeMode => {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'dark' || stored === 'light') return stored;
  return 'light';
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setModeState] = useState<ThemeMode>(readInitialMode);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, mode);
    document.documentElement.style.colorScheme = mode;
  }, [mode]);

  const setMode = useCallback((next: ThemeMode) => setModeState(next), []);
  const toggle = useCallback(
    () => setModeState((m) => (m === 'dark' ? 'light' : 'dark')),
    []
  );

  const value = useMemo<ThemeContextValue>(
    () => ({ mode, theme: themes[mode], toggle, setMode }),
    [mode, toggle, setMode]
  );

  return (
    <ThemeContext.Provider value={value}>
      <SCThemeProvider theme={themes[mode]}>
        <GlobalStyles />
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeMode = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useThemeMode must be used inside ThemeProvider');
  return ctx;
};
