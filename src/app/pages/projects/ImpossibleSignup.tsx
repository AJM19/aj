import styled from 'styled-components';
import { useState } from 'react';
import { ProjectPage } from '../../components/ProjectPage';
import { fontFamily, fontSize, motion, space, weight } from '../../styles/tokens';

const TEASES: Record<number, string> = {
  3: 'almost got it.',
  5: 'keep trying.',
  7: 'next one for sure.',
  10: 'getting embarrassing.',
  15: 'just give up.',
};

const ImpossibleSignup = () => {
  const [isWild, setIsWild] = useState(false);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const tease = (Object.keys(TEASES) as unknown as number[])
    .map(Number)
    .filter((n) => attempts >= n)
    .pop();

  const dodge = () => {
    if (!isWild) setIsWild(true);
    setTop(Math.random() * 80);
    setLeft(Math.random() * 80);
    setAttempts((a) => a + 1);
  };

  return (
    <ProjectPage
      eyebrow="prototype"
      title="Impossible Signup"
      year="2024"
      lede="A signup form that fights back. Type your credentials and try to hit submit — the form has other plans."
    >
      <Stage>
        {tease && <Tease key={tease}>{TEASES[tease]}</Tease>}
        <Form>
          <Title>Sign up</Title>
          <Divider />
          <Input placeholder="username" />
          <Input type="password" placeholder="password" />
          <DodgeBtn
            $wild={isWild}
            style={isWild ? { top: `${top}%`, left: `${left}%` } : undefined}
            onMouseEnter={dodge}
            onClick={dodge}
          >
            submit
          </DodgeBtn>
        </Form>
        <Counter>attempts · {attempts}</Counter>
      </Stage>
    </ProjectPage>
  );
};

export default ImpossibleSignup;

const Stage = styled.div`
  position: relative;
  width: 100%;
  min-height: 540px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.rule};
`;

const Tease = styled.p`
  position: absolute;
  top: ${space['2']};
  left: 50%;
  transform: translateX(-50%);
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.sm};
  color: ${({ theme }) => theme.accent};
  letter-spacing: 0.04em;
`;

const Form = styled.div`
  position: relative;
  width: min(480px, 90%);
  padding: ${space['5']};
  border: 1px solid ${({ theme }) => theme.ruleStrong};
  background: ${({ theme }) => theme.bgElevated};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: ${space['2']};
  min-height: 400px;
`;

const Title = styled.h2`
  margin: 0;
  font-family: ${fontFamily.display};
  font-size: ${fontSize['3xl']};
  font-weight: ${weight.bold};
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.fg};
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.rule};
  margin: 0 0 ${space['2']};
`;

const Input = styled.input`
  height: 42px;
  width: 100%;
  background: ${({ theme }) => theme.bgInset};
  border: 1px solid ${({ theme }) => theme.rule};
  color: ${({ theme }) => theme.fg};
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.sm};
  padding: 0 ${space['2']};
  transition: border-color ${motion.base} ${motion.ease};

  &::placeholder {
    color: ${({ theme }) => theme.fgFaint};
  }
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
  }
`;

const DodgeBtn = styled.button<{ $wild: boolean }>`
  margin-top: ${space['2']};
  align-self: flex-start;
  height: 42px;
  padding: 0 ${space['3']};
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.sm};
  color: ${({ theme }) => theme.accentFg};
  background: ${({ theme }) => theme.accent};
  border: 1px solid ${({ theme }) => theme.accent};
  cursor: pointer;
  transition:
    background ${motion.base} ${motion.ease},
    color ${motion.base} ${motion.ease};

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.accent};
  }

  ${({ $wild }) =>
    $wild &&
    `
    position: absolute;
  `}
`;

const Counter = styled.p`
  position: absolute;
  bottom: ${space['2']};
  right: ${space['2']};
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.xs};
  color: ${({ theme }) => theme.fgFaint};
  margin: 0;
  letter-spacing: 0.04em;
`;
