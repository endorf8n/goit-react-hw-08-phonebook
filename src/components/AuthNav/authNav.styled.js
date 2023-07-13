import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LoginList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: white;

  text-shadow: 1px 1px 2px black, 0 0 1em white, 0 0 0.2em white;
  &.active {
    color: ${({ theme }) => theme.colors.lightRed};
    text-shadow: 1px 1px 2px black, 0 0 1em white, 0 0 0.2em white;
  }
`;
