import React, { useState } from 'react';
import styled from 'styled-components';

import GameEngine from '../../engine/game';

const WrapperGame = styled.div`
    display: flex;
    flex-direction: column;
    margin: 100px;
`;

const RowContainer = styled.div`
   display: flex;
   justify-content: center;
`;

const Letter = styled.div`
    width: 60px;
    height: 60px;
    border: 6px solid ${({ theme }) => theme.colors.tertiary};
    background: ${({ theme }) => theme.colors.fourth};
    font-size: 40px;
    color: ${({ theme }) => theme.colors.white};

    ${({ active }) => active && `
        background: black;
    `}
`;

const isActive = (x, y, engineAnswers) => {
  console.log(engineAnswers[x][y][1]);
  return engineAnswers[x][y];
};

const Row = ({ letters, showAnswers, engineAnswers, x }) => (<RowContainer>
  {letters.map((letter, y) => <Letter active={isActive(x, y, engineAnswers)} showAnswers={showAnswers}>
    {letter}
  </Letter>)}
</RowContainer>);

export function Game({ level, showAnswers }) {
  const engine = new GameEngine(level);
  const engineAnswers = engine.findWord();
  const [answers, setAnswers] = useState(showAnswers);
  
  return(<WrapperGame>
    {level.map((row, x) => <Row x={x} engineAnswers={engineAnswers} showAnswers={showAnswers} letters={row}></Row>)}
  </WrapperGame>);
}