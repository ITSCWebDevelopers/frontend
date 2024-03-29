import {useMemo} from 'react';
import {Provider} from 'react-redux';
import {RouterProvider, useNavigate} from 'react-router-dom';
import {ThemeProvider, createTheme} from '@mui/material';
import {setupStore} from './store';
import {ROUTER} from './Router';
import {DEFAULT_THEME} from './shared/constants/theme';
import globalRouter from './shared/utils/globalRouter';

const App = () => {
  const store = setupStore();
  const theme = useMemo(() => createTheme(DEFAULT_THEME), []);
  const navigate = useNavigate();
  globalRouter.navigate = navigate;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={ROUTER} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
