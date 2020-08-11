import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const LevelSelectorWrapper = styled.div`
    margin-top: 50px;    
    text-align: center;
`;

const LevelWrapper = styled.span`
    background: ${({ theme }) => theme.colors.secondary};
    padding: 10px;
    margin: 5px;
    color: white;
    margin-top: 20px;
    font-size: 20px;
`;

export const LevelSelector = ({ levels }) => {
  const { resources } = levels.data;

  return (<LevelSelectorWrapper>
    <h2>Seleccioná el nivel que te gustaría jugar:</h2>
    {resources.map((level, index) => (<Link key={index} href={`level/${index + 1}`}>
      <a><LevelWrapper>{index + 1}</LevelWrapper></a>
    </Link>))}
  </LevelSelectorWrapper>  
  );
};
