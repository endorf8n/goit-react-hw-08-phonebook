import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/authOperations';

export const RegisterPage = () => {
  const [credentials, setCredentials] = useState({
    name: '',
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
    dispatch(registerThunk(credentials));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={credentials.name}
          onChange={handleChangeInput}
          placeholder="Enter your name..."
        />
      </label>
      <label>
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChangeInput}
          placeholder="Enter your email..."
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
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
