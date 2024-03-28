import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://192.168.1.109:8000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
