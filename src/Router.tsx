import {createBrowserRouter} from 'react-router-dom';
import {Login} from './pages/Login';
import {Tasks} from './pages/Tasks';
import {Defect} from './pages/Defect/Defect';
import {Report} from './pages/Report/Report';
import {Layout} from './components/Layout';
import {CreatingAssignment} from './pages/CreatingAssignment';
import {Assignment} from './pages/Assignment/Assignment';

export const ROUTER = createBrowserRouter([
  {path: '/login', element: <Login />},
  {
    path: '/',
    element: <Layout />,
    children: [
      {path: '/', element: <Tasks />},
      {path: '/report', element: <Report />},
      {path: '/assignment', element: <Assignment />},
      {path: '/creating-assignment', element: <CreatingAssignment />},
      {path: '/defect', element: <Defect />},
    ],
  },
]);
