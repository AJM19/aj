import styled, { keyframes } from 'styled-components';

export const colors = {
  mainBlue: '#1b7fcc',
  darkBlue: '#103191',
  mainGray: '#dddddd',
};

export const flyIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const Header1 = styled.h1`
  color: ${(props) => (props.color ? props.color : 'black')};
  width: fit-content;
  font-family: Barlow;
  margin: 0;
  font-weight: 800;
  display: inline-flex;
  font-size: 65px;

  animation: ${flyIn} 1s ease-out;

  @media (max-width: 500px) {
    font-size: 45px;
  }
`;

export const SubHeader1 = styled.p`
  margin: 0;
  display: inline-flex;
  width: fit-content;
  font-family: Barlow;
  color: ${(props) => (props.color ? props.color : 'black')};
  font-size: 20px;

  animation: ${flyIn} 1s ease-out;
`;

export const BodyText = styled.p`
  margin: 0;
  display: inline-flex;
  width: fit-content;
  font-family: Barlow;
  color: ${(props) => (props.color ? props.color : 'black')};
  font-size: 15px;
  font-weight: ${(props) => props.weight};
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin};
  flex-wrap: wrap;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap};
  width: ${(props) => props.width};
`;

export const Button = styled.button`
  display: flex;
  width: fit-content;
  height: 45px;
  border-radius: 25px;
  color: white;
  background: ${colors.darkBlue};
  justify-content: center;
  align-items: center;
  font-family: Barlow;
  font-weight: bold;
  border: 1px solid white;
  padding: 15px;

  cursor: pointer;

  font-size: 20px;
  box-shadow: 1px 1px #ccc6c6;

  animation: ${flyIn} 1s ease-out;

  :hover {
    color: ${colors.darkBlue};
    background: white;
    border: 1px solid ${colors.darkBlue};
  }
`;
