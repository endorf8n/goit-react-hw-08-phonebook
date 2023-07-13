import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/auth/authOperations';
import { selectUser } from 'redux/selectors';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{user.email}</p>
      <button onClick={() => dispatch(logoutThunk())}>Logout</button>
    </div>
  );
};
