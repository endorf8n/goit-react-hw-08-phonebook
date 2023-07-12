import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearToken, login, logout, register, setToken } from 'service/authApi';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await register(credentials);
      setToken(res.token);
      return res;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await login(credentials);
      setToken(res.token);
      return res;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await logout();
      clearToken();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
