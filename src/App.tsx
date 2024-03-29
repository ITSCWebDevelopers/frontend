import {useMemo} from 'react';
import {Provider} from 'react-redux';
import {RouterProvider} from 'react-router-dom';
import {ThemeProvider, createTheme} from '@mui/material';
import {setupStore} from './store';
import {ROUTER} from './Router';
import {DEFAULT_THEME} from './shared/constants/theme';

const App = () => {
  const store = setupStore();
  const theme = useMemo(() => createTheme(DEFAULT_THEME), []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={ROUTER} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
