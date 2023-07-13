import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding: ${({ theme }) => theme.spacing(8)};
  width: ${({ theme }) => theme.spacing(80)};
  border-radius: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const FormTitle = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(8)};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.dark};
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.small};
  width: 100%;
`;

export const SpanForm = styled.span`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  font-size: ${({ theme }) => theme.fontSizes.smallest};
  color: ${({ theme }) => theme.colors.dark};
`;

export const Input = styled.input`
  display: block;
  width: 98%;
  height: ${({ theme }) => theme.spacing(8)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  border: 1px solid #a0a9ba;
  outline: 2px solid transparent;
  &:focus {
    border-color: ${({ theme }) => theme.colors.blue};
    box-shadow: 0 0 0 2px rgba(137, 207, 240, 0.9);
  }
`;

export const FormBtn = styled.button`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.smallest};
  width: 100%;
  height: ${({ theme }) => theme.spacing(8)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  border-color: transparent;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.violet};
  }
`;
