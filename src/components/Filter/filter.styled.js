import styled from 'styled-components';

export const FilterTitle = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.presmall};
`;

export const FilterInput = styled.input`
  display: block;
  margin: 0 auto;
  width: ${({ theme }) => theme.spacing(60)};
  height: ${({ theme }) => theme.spacing(7)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  border: 1px solid #a0a9ba;
  outline: 2px solid transparent;
  &:focus {
    border-color: ${({ theme }) => theme.colors.blue};
    box-shadow: 0 0 0 2px rgba(137, 207, 240, 0.9);
  }
`;
