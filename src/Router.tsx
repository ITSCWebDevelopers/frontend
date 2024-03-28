import {createBrowserRouter} from 'react-router-dom';
import {Login} from './pages/Login/Login';
import {Tasks} from './pages/Tasks/Tasks';

export const ROUTER = createBrowserRouter([
  {
    path: '/',
    element: <Tasks />,
  },
  {path: '/login', element: <Login />},
]);
