import styled from 'styled-components';

export const ContactItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.presmall};
`;

export const DeleteBtnStyled = styled.button`
  width: ${({ theme }) => theme.spacing(20)};
  font-size: ${({ theme }) => theme.fontSizes.smallest};
  background-color: ${({ theme }) => theme.colors.lightRed};
  border-color: transparent;
  border-radius: ${({ theme }) => theme.spacing(1)};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.light};
    box-shadow: ${({ theme }) => theme.shadows.small};
  }
`;

export const ButtonsStyled = styled.div`
  display: flex;
  gap: 10px;
`;

export const EditBtnStyled = styled.button`
  width: ${({ theme }) => theme.spacing(20)};
  font-size: ${({ theme }) => theme.fontSizes.smallest};
  background-color: ${({ theme }) => theme.colors.blue};
  border-color: transparent;
  border-radius: ${({ theme }) => theme.spacing(1)};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.light};
    box-shadow: ${({ theme }) => theme.shadows.small};
  }
`;
