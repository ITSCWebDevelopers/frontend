import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {loginAction} from './userAsyncActions';

const INIT_DATA = {
  isAuth: localStorage.getItem('token') ? true : false,
  token: localStorage.getItem('token') || '',
};

export const userSlice = createSlice({
  name: 'userSLice',
  initialState: INIT_DATA,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAction.fulfilled, (state, {payload}: PayloadAction<TokenResponse>) => {
      state.isAuth = true;
      localStorage.setItem('token', payload.token);
      state.token = payload.token;
    });
  },
});
