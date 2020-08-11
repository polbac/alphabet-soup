import React from 'react';
import styled from 'styled-components';

const WrapperGame = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px;
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

    ${({ active, showAnswers, theme }) => active && showAnswers && `
        color: ${theme.colors.black};
    `}
`;

const isActive = (x, y, results) => {
  if (!results) return false;
  return results.find(coordinte => coordinte.x === x && coordinte.y === y) !== undefined;

};

const Row = ({ letters, showAnswers, results, y }) => {

  return (<RowContainer>
    {letters.map((letter, x) => <Letter active={isActive(x, y, results)} showAnswers={showAnswers}>
      {!showAnswers ? letter : (isActive(x, y, results) ? letter : '❌')}
    </Letter>)}
  </RowContainer>);
};

export function Game({ level, showAnswers, results }) {
  return(<WrapperGame>
    {level.map((row, y) => <Row y={y} results={results} showAnswers={showAnswers} letters={row}></Row>)}
  </WrapperGame>);
}