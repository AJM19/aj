import styled, { css } from 'styled-components';
import {
  fontFamily,
  fontSize,
  layout,
  lineHeight,
  motion,
  space,
  weight,
} from './tokens';

export const Container = styled.div`
  width: 100%;
  max-width: ${layout.contentMaxWidth};
  margin: 0 auto;
  padding: 0 ${layout.contentPadding};

  @media (max-width: 640px) {
    padding: 0 ${space['3']};
  }
`;

export const Section = styled.section<{ $tight?: boolean }>`
  padding: ${({ $tight }) => ($tight ? `${space['6']} 0` : `${space['12']} 0`)};
  border-top: 1px solid ${({ theme }) => theme.rule};

  &:first-of-type {
    border-top: none;
  }
`;

export const Rule = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.rule};
  margin: ${space['4']} 0;
`;

export const Eyebrow = styled.span`
  display: inline-block;
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.xs};
  font-weight: ${weight.medium};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.fgMuted};
`;

export const Display = styled.h1<{ $size?: 'lg' | 'xl' }>`
  font-family: ${fontFamily.display};
  font-weight: ${weight.bold};
  letter-spacing: -0.04em;
  line-height: ${lineHeight.tight};
  color: ${({ theme }) => theme.fg};
  ${({ $size }) =>
    $size === 'xl'
      ? css`
          font-size: clamp(56px, 12vw, ${fontSize['7xl']});
        `
      : css`
          font-size: clamp(44px, 8vw, ${fontSize['6xl']});
        `};
`;

export const Heading = styled.h2`
  font-family: ${fontFamily.display};
  font-weight: ${weight.semibold};
  letter-spacing: -0.02em;
  line-height: ${lineHeight.snug};
  font-size: clamp(28px, 4vw, ${fontSize['4xl']});
  color: ${({ theme }) => theme.fg};
`;

export const SubHeading = styled.h3`
  font-family: ${fontFamily.sans};
  font-weight: ${weight.semibold};
  font-size: ${fontSize['2xl']};
  line-height: ${lineHeight.snug};
  color: ${({ theme }) => theme.fg};
`;

export const Text = styled.p<{ $muted?: boolean; $size?: keyof typeof fontSize }>`
  font-family: ${fontFamily.sans};
  font-size: ${({ $size }) => fontSize[$size ?? 'base']};
  line-height: ${lineHeight.normal};
  color: ${({ theme, $muted }) => ($muted ? theme.fgMuted : theme.fg)};
`;

export const Mono = styled.span`
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.sm};
  letter-spacing: 0;
  color: ${({ theme }) => theme.fgMuted};
`;

export const Stack = styled.div<{ $gap?: keyof typeof space }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => space[$gap ?? '3']};
`;

export const Row = styled.div<{ $gap?: keyof typeof space; $align?: string; $wrap?: boolean }>`
  display: flex;
  flex-direction: row;
  gap: ${({ $gap }) => space[$gap ?? '2']};
  align-items: ${({ $align }) => $align ?? 'center'};
  flex-wrap: ${({ $wrap }) => ($wrap ? 'wrap' : 'nowrap')};
`;

export const buttonReset = css`
  border: none;
  background: transparent;
  padding: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
`;

export const Button = styled.button<{ $variant?: 'primary' | 'ghost' }>`
  ${buttonReset};
  display: inline-flex;
  align-items: center;
  gap: ${space['1']};
  height: 40px;
  padding: 0 ${space['3']};
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.sm};
  font-weight: ${weight.medium};
  letter-spacing: 0.02em;
  border-radius: 0;
  transition: background ${motion.base} ${motion.ease},
    color ${motion.base} ${motion.ease},
    border-color ${motion.base} ${motion.ease};

  ${({ $variant, theme }) =>
    $variant === 'primary'
      ? css`
          background: ${theme.accent};
          color: ${theme.accentFg};
          border: 1px solid ${theme.accent};

          &:hover {
            background: transparent;
            color: ${theme.accent};
          }
        `
      : css`
          background: transparent;
          color: ${theme.fg};
          border: 1px solid ${theme.ruleStrong};

          &:hover {
            border-color: ${theme.accent};
            color: ${theme.accent};
          }
        `};
`;

export const Link = styled.a`
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.ruleStrong};
  transition: border-color ${motion.base} ${motion.ease}, color ${motion.base} ${motion.ease};

  &:hover {
    color: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
  }
`;
