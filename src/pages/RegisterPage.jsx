import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/authOperations';
import {
  FormBtn,
  FormLabel,
  FormStyled,
  FormTitle,
  Input,
  SpanForm,
} from './pagesStyles/loginregPage.styled';

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
    <FormStyled onSubmit={handleSubmit}>
      <FormTitle>Register to see more</FormTitle>
      <FormLabel>
        <SpanForm>Name</SpanForm>
        <Input
          type="text"
          name="name"
          value={credentials.name}
          onChange={handleChangeInput}
          placeholder="Enter your name..."
        />
      </FormLabel>
      <FormLabel>
        <SpanForm>Email</SpanForm>
        <Input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChangeInput}
          placeholder="Enter your email..."
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
        />
      </FormLabel>
      <FormBtn type="submit">Register</FormBtn>
    </FormStyled>
  );
};
