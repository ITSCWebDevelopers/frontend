import {Link, createBrowserRouter} from 'react-router-dom';
import {Camera} from './components/Camera/Camera';
import {Login} from './pages/Login/Login';
import {Report} from './pages/Report/Report';
import {ROUTES} from './shared/constants/routes';

export const ROUTER = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Link to={ROUTES.LOGIN}>Login</Link>
        <Link to={ROUTES.REPORT('', 'nameOFRoad')}>Report</Link>
        <Camera />
      </div>
    ),
  },
  {path: '/login', element: <Login />},
  {path: '/report/:id?', element: <Report />},
]);
