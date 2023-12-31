import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.spacing(100)};
  border-color: ${({ theme }) => theme.colors.dark};
  border-radius: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.light};
  text-align: center;
  margin: 0 auto;
`;

export const ContactFormLabel = styled.label`
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
`;

export const Input = styled.input`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.smallest};
  width: 100%;
  height: ${({ theme }) => theme.spacing(8)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  border: 1px solid #a0a9ba;
  outline: 2px solid transparent;
  &:focus {
    border-color: ${({ theme }) => theme.colors.blue};
    box-shadow: 0 0 0 2px rgba(137, 207, 240, 0.9);
  }
`;

export const AddContactBtn = styled.button`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.smallest};
  width: ${({ theme }) => theme.spacing(60)};
  margin: 0 auto;
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
