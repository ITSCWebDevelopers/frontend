import {createAsyncThunk} from '@reduxjs/toolkit';
import {postLogin} from '@/shared/api';

export const loginAction = createAsyncThunk('loginACtion', async (data: LoginCredintails, _) => {
  try {
    const response = await postLogin({params: data});

    return response.data;
  } catch (err) {
    const error = err as Error;
    throw error;
  }
});
