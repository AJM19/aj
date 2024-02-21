import styled from 'styled-components';
import { colors } from '../styles/styledcomps';

const SearchBar = ({ setValue, enterToggle, placeholder }) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      enterToggle();
    }
  };
  return (
    <StyledContainer>
      <StyledInputBar
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyPress={handleKeyPress}
      />
      <StyledIcon src={'./assets/icons/search.png'} alt="search" />
    </StyledContainer>
  );
};

export default SearchBar;

const StyledInputBar = styled.input`
  display: flex;
  width: 200px;
  height: 25px;
  color: black;
  border-radius: 5px;
  background: #f0f2f5;
  border: 1px solid transparent;
  padding-left: 25px;

  font-size: 12px;
  font-family: Barlow;

  :hover {
    border: 1px solid ${colors.darkBlue};
  }
`;

const StyledIcon = styled.img`
  position: absolute;
  height: 15px;
  width: 15px;
  top: 25%;
  left: 5px;
`;

const StyledContainer = styled.div`
  position: relative;
  height: fit-content;
  width: fit-content;
`;
