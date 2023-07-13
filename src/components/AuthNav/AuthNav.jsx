import { Link } from 'react-router-dom';
import { LoginList } from './authNav.styled';

const routes = [
  { path: '/register', text: 'Register' },
  { path: '/login', text: 'Login' },
];
export const AuthNav = () => {
  return (
    <LoginList>
      {routes.map(route => (
        <li key={route.path}>
          <Link to={route.path}>{route.text}</Link>
        </li>
      ))}
    </LoginList>
  );
};
