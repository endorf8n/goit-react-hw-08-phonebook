import styled from 'styled-components';

export const UserWrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const UserEmail = styled.p`
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-style: italic;
`;

export const LogoutBtn = styled.button`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.smallest};
  width: ${({ theme }) => theme.spacing(20)};
  height: ${({ theme }) => theme.spacing(8)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  border-color: transparent;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  color: ${({ theme }) => theme.colors.violet};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.dark};
  }
`;
