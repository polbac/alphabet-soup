import styled from 'styled-components';

const BaseStyles = `
    padding-left: 15px;
    padding-right: 15px;
    text-transform: uppercase;
    margin: 5px;
    border: 0;
    border-radius: 0;
    line-height: 40px;
    height: 40px;
    display: inline-block;
    cursor: pointer;
    font-family: 'Source Code Pro', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen;
    font-size: 20px;
`;

export const ButtonSecondary = styled.button`
    ${BaseStyles}
    background: ${({ theme }) => theme.colors.secondary};
    
`;

export const LinkButtonPrimary = styled.a`
    ${BaseStyles}
    background: ${({ theme }) => theme.colors.primary};
`;
