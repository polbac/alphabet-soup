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

    ${({ active, showAnswers }) => active && showAnswers && `
        background: ${({ theme }) => theme.colors.secondary};
    `}
`;

const isActive = (x, y, engineAnswers) => {
  return false;
  return engineAnswers[x][y][1];
};

const Row = ({ letters, showAnswers, engineAnswers, x }) => {

  return (<RowContainer>
    {letters.map((letter, y) => <Letter active={isActive(x, y, engineAnswers)} showAnswers={showAnswers}>
      {!showAnswers ? letter : (isActive(x, y, engineAnswers) ? letter : '❌')}
    </Letter>)}
  </RowContainer>);
};

export function Game({ level, showAnswers }) {
  const engine = new GameEngine(level);
  const engineAnswers = engine.findWords();
  console.log('engineAnswers', engineAnswers);
  return(<WrapperGame>
    {level.map((row, x) => <Row x={x} engineAnswers={engineAnswers} showAnswers={showAnswers} letters={row}></Row>)}
  </WrapperGame>);
}