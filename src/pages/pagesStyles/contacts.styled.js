import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(10)};
  width: ${({ theme }) => theme.spacing(120)};
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.light};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.violet};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const TitleContacts = styled.h2`
  padding-top: ${({ theme }) => theme.spacing(3)};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.violet};
  text-align: center;
`;
