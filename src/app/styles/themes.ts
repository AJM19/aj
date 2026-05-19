import { palette } from './tokens';

export type ThemeMode = 'dark' | 'light';

export interface Theme {
  mode: ThemeMode;
  bg: string;
  bgElevated: string;
  bgInset: string;
  fg: string;
  fgMuted: string;
  fgFaint: string;
  rule: string;
  ruleStrong: string;
  accent: string;
  accentFg: string;
  accentMuted: string;
  selection: string;
}

export const darkTheme: Theme = {
  mode: 'dark',
  bg: palette.ink900,
  bgElevated: palette.ink800,
  bgInset: palette.ink700,
  fg: palette.ink50,
  fgMuted: palette.ink300,
  fgFaint: palette.ink400,
  rule: 'rgba(255, 255, 255, 0.08)',
  ruleStrong: 'rgba(255, 255, 255, 0.18)',
  accent: palette.blue300,
  accentFg: palette.ink900,
  accentMuted: 'rgba(59, 140, 211, 0.16)',
  selection: 'rgba(59, 140, 211, 0.32)',
};

export const lightTheme: Theme = {
  mode: 'light',
  bg: palette.ink0,
  bgElevated: palette.ink50,
  bgInset: palette.ink100,
  fg: palette.ink900,
  fgMuted: palette.ink500,
  fgFaint: palette.ink400,
  rule: 'rgba(10, 11, 14, 0.1)',
  ruleStrong: 'rgba(10, 11, 14, 0.22)',
  accent: palette.blue500,
  accentFg: palette.ink0,
  accentMuted: 'rgba(16, 100, 168, 0.1)',
  selection: 'rgba(16, 100, 168, 0.18)',
};

export const themes: Record<ThemeMode, Theme> = {
  dark: darkTheme,
  light: lightTheme,
};
