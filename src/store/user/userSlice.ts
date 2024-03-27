import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {loginAction} from './userAsyncActions';

const INIT_DATA = {
  isAuth: false,
  token: '',
};

export const userSlice = createSlice({
  name: 'userSLice',
  initialState: INIT_DATA,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAction.fulfilled, (state, action: PayloadAction<string>) => {
      state.isAuth = true;
      state.token = action.payload;
    });
  },
});
