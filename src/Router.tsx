import {createBrowserRouter} from 'react-router-dom';
import {Login} from './pages/Login/Login';

export const ROUTER = createBrowserRouter([
  {path: '/', element: <div>main</div>},
  {path: '/login', element: <Login />},
]);
