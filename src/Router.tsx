import {createBrowserRouter} from 'react-router-dom';
import {Layout} from './components/Layout';
import {Assignment} from './pages/Assignment/Assignment';
import {CreatingAssignment} from './pages/CreatingAssignment';
import {Defect} from './pages/Defect/Defect';
import {Login} from './pages/Login';
import {Report} from './pages/Report/Report';
import {Tasks} from './pages/Tasks';

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
      {path: '/defectInfo', element: <>Info</>},
    ],
  },
]);
