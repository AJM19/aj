import styled, { keyframes } from 'styled-components';
import { palette, fontFamily, fontSize, weight, lineHeight, space, motion } from './tokens';

export const colors = {
  mainBlue: palette.blue400,
  darkBlue: palette.blue600,
  mainGray: palette.ink100,
};

export const flyIn = keyframes`
  from { transform: translateX(-12px); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
`;

export const Header1 = styled.h1`
  color: ${({ theme, color }) => color || theme.fg};
  margin: 0;
  font-family: ${fontFamily.display};
  font-weight: ${weight.bold};
  letter-spacing: -0.03em;
  line-height: ${lineHeight.tight};
  font-size: clamp(40px, 7vw, 64px);
  width: fit-content;
  animation: ${flyIn} 400ms ${motion.easeOut} both;
`;

export const SubHeader1 = styled.p`
  margin: 0;
  font-family: ${fontFamily.sans};
  color: ${({ theme, color }) => color || theme.fgMuted};
  font-size: ${fontSize.lg};
  line-height: ${lineHeight.normal};
  max-width: 60ch;
  animation: ${flyIn} 500ms ${motion.easeOut} both;
`;

export const BodyText = styled.p`
  margin: 0;
  font-family: ${fontFamily.sans};
  color: ${({ theme, color }) => color || theme.fg};
  font-size: ${fontSize.base};
  font-weight: ${({ weight: w }) => w || weight.regular};
  line-height: ${lineHeight.normal};
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ gap }) => gap || space['2']};
  margin: ${({ margin }) => margin || '0'};
  flex-wrap: wrap;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  gap: ${({ gap }) => gap || space['2']};
  width: ${({ width }) => width || 'auto'};
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${space['1']};
  height: 40px;
  padding: 0 ${space['3']};
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.sm};
  font-weight: ${weight.medium};
  letter-spacing: 0.02em;
  border: 1px solid ${({ theme }) => theme.ruleStrong};
  background: transparent;
  color: ${({ theme }) => theme.fg};
  cursor: pointer;
  border-radius: 0;
  transition:
    color ${motion.base} ${motion.ease},
    border-color ${motion.base} ${motion.ease},
    background ${motion.base} ${motion.ease};

  &:hover {
    color: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
  }
`;
