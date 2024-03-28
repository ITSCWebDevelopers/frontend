import {createBrowserRouter} from 'react-router-dom';
import {Login} from './pages/Login';
import {Tasks} from './pages/Tasks';
import {Layout} from './components/Layout';

export const ROUTER = createBrowserRouter([
  {path: '/login', element: <Login />},
  {
    path: '/',
    element: <Layout />,
    children: [
      {path: '/', element: <Tasks />},
      {path: '/report/:id?', element: <Report />},
      {path: '/assignment', element: <p>assignment</p>},
      {path: '/creating-assignment', element: <p>creating-assignment</p>},
      {path: '/defect', element: <p>creating-assignment</p>},
    ],
  },
]);
