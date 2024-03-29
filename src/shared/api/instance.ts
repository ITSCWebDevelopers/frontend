import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://itscweb.pythonanywhere.com/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
