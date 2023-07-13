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
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    dispatch(loginThunk(credentials))
      .unwrap()
      .then(
        () =>
          email === credentials.email &&
          password === credentials.password &&
          toast.success(`Welcome back!`)
      )
      .catch(() =>
        toast.error(
          'You entered an incorrect password or email. Please, try again.'
        )
      );
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
