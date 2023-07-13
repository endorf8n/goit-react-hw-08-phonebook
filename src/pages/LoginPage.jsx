import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/authOperations';
import { toast } from 'react-toastify';
import {
  FormBtn,
  FormLabel,
  FormStyled,
  FormTitle,
  Input,
  SpanForm,
} from './pagesStyles/loginregPage.styled';

const LoginPage = () => {
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
    dispatch(loginThunk(credentials))
      .unwrap()
      .then(() => toast.success(`Welcome back!`));
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <FormTitle>Welcome to Phonebook</FormTitle>
      <FormLabel>
        <SpanForm>Email</SpanForm>
        <Input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChangeInput}
          placeholder="Enter your email..."
          required
        />
      </FormLabel>
      <FormLabel>
        <SpanForm>Password</SpanForm>
        <Input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChangeInput}
          placeholder="Enter your password..."
          required
        />
      </FormLabel>
      <FormBtn type="submit">Login</FormBtn>
    </FormStyled>
  );
};

export default LoginPage;
