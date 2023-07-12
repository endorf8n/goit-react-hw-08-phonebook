import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/authOperations';

export const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChangeInput = ({ target }) => {
    const { name, value } = target;
    setCredentials(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginThunk(credentials));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChangeInput}
          placeholder="Enter your email..."
          required
        />
      </label>
      <label>
        <span>Password</span>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChangeInput}
          placeholder="Enter your password..."
          required
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};
