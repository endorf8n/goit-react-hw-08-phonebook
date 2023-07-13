import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/auth/authOperations';
import { selectUser } from 'redux/selectors';
import { LogoutBtn, UserEmail, UserWrapper } from './userMenu.styled';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <UserWrapper>
      <UserEmail>{user.email}</UserEmail>
      <LogoutBtn onClick={() => dispatch(logoutThunk())}>Logout</LogoutBtn>
    </UserWrapper>
  );
};
