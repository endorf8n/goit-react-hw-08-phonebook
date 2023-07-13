import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { NavLinkStyled, NavStyle } from './navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <NavStyle>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
      </NavStyle>
      <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
    </>
  );
};
