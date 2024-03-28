/* eslint-disable @typescript-eslint/no-explicit-any */
import type {InternalAxiosRequestConfig} from 'axios';

export const tokenInterceptor = (value: InternalAxiosRequestConfig<any>) => {
  const token = localStorage.getItem('token');

  if (token && value.headers) {
    value.headers.Authorization = `Token ${token}`;
  }

  return value;
};
