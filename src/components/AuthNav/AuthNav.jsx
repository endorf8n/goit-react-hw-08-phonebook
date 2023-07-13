import { LoginList, NavLinkStyled } from './authNav.styled';

const routes = [
  { path: '/register', text: 'Register' },
  { path: '/login', text: 'Login' },
];
export const AuthNav = () => {
  return (
    <LoginList>
      {routes.map(route => (
        <li key={route.path}>
          <NavLinkStyled to={route.path}>{route.text}</NavLinkStyled>
        </li>
      ))}
    </LoginList>
  );
};
