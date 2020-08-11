import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px; 
`;

export const Header = () => (
  <HeaderWrapper>
    <h1>Sopa de Letras 🔠</h1>
  </HeaderWrapper>
);
