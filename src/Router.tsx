import {Link, createBrowserRouter} from 'react-router-dom';
import {Login} from './pages/Login/Login';
import {ROUTES} from './shared/constants/routes';
import {Camera} from './components/Camera/Camera';

export const ROUTER = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Link to={ROUTES.LOGIN}>Login</Link>
        <Camera />
      </div>
    ),
  },
  {path: '/login', element: <Login />},
]);
