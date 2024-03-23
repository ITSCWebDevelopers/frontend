import {Provider} from 'react-redux';
import {RouterProvider} from 'react-router-dom';
import {setupStore} from './store';
import {ROUTER} from './Router';

const App = () => {
  const store = setupStore();

  return (
    <Provider store={store}>
      <RouterProvider router={ROUTER} />
    </Provider>
  );
};

export default App;
