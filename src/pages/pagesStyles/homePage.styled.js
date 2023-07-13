import styled from 'styled-components';

export const WelcomeTitle = styled.h1`
  padding-top: 100px;
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;
`;
