import styled from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(4)};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  background: linear-gradient(#000428, #004e92);
`;

export const MainStyle = styled.main`
  background: linear-gradient(#12c2e9, #c471ed, #f64f59);
  width: 100vw;
  height: 100vh;
`;
