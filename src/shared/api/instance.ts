import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:31299/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
