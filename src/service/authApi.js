import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = () => {
  instance.defaults.headers.common.Authorization = ``;
};

export const register = async credentials => {
  const { data } = await instance.post('/users/signup', credentials);
  return data;
};

export const login = async credentials => {
  const { data } = await instance.post('/users/login', credentials);
  return data;
};

export const logout = async () => {
  const { data } = await instance.post('/users/logout');
  return data;
};
