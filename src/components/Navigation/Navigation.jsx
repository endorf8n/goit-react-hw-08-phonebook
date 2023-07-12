import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
      <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
    </>
  );
};
