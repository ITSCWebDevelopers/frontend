import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://itscweb.pythonanywhere.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
