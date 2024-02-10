import styled from 'styled-components';
import { BodyText, colors, Header1 } from '../styles/styledcomps';

const Contact = () => {
  return (
    <StyledContainer id="contactMe">
      <Header1 color={colors.mainBlue}>Let's get in touch.</Header1>
      <BodyText color={colors.darkBlue}>ajmilbauer@gmail.com</BodyText>
    </StyledContainer>
  );
};

export default Contact;

const StyledContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background: white;
  margin: 75px;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  padding: 10px 0;
  border: 1px solid ${colors.darkBlue};
  height: 175px;
  justify-content: center;
  text-align: center;

  @media (max-width: 800px) {
    margin: 40px;
  }
`;
