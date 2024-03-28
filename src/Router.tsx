import {createBrowserRouter} from 'react-router-dom';
import {Login} from './pages/Login';
import {Tasks} from './pages/Tasks';
import {Layout} from './components/Layout';
import {CreatingAssignment} from './pages/CreatingAssignment';

export const ROUTER = createBrowserRouter([
  {path: '/login', element: <Login />},
  {
    path: '/',
    element: <Layout />,
    children: [
      {path: '/', element: <Tasks />},
      {path: '/report', element: <p>Report</p>},
      {path: '/assignment', element: <p>assignment</p>},
      {path: '/creating-assignment', element: <CreatingAssignment />},
      {path: '/defect', element: <p>creating-assignment</p>},
    ],
  },
]);
