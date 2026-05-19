import styled from 'styled-components';
import { fontFamily, fontSize, motion, space } from '../styles/tokens';

const SearchBar = ({ setValue, enterToggle, placeholder }) => {
  const handleKey = (event) => {
    if (event.key === 'Enter') enterToggle();
  };
  return (
    <Wrap>
      <Glyph>/</Glyph>
      <Input
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleKey}
      />
    </Wrap>
  );
};

export default SearchBar;

const Wrap = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

const Glyph = styled.span`
  position: absolute;
  left: ${space['1_5']};
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.sm};
  color: ${({ theme }) => theme.fgMuted};
  pointer-events: none;
`;

const Input = styled.input`
  height: 36px;
  width: 220px;
  padding: 0 ${space['1_5']} 0 ${space['4']};
  background: ${({ theme }) => theme.bgInset};
  border: 1px solid ${({ theme }) => theme.rule};
  color: ${({ theme }) => theme.fg};
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.sm};
  transition: border-color ${motion.base} ${motion.ease};

  &::placeholder { color: ${({ theme }) => theme.fgFaint}; }
  &:focus { outline: none; border-color: ${({ theme }) => theme.accent}; }
`;
