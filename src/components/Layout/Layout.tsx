import {Box} from '@mui/material';
import {Outlet, useNavigate} from 'react-router-dom';
import {NavigationBar} from '../NavigationBar';
import {styles} from './Layout.styles';
import globalRouter from '@/shared/utils/globalRouter';

export const Layout = () => {
  const navigate = useNavigate();
  globalRouter.navigate = navigate;

  return (
    <Box sx={styles.wrapper}>
      <NavigationBar />
      <Box component='main' sx={styles.main}>
        <Outlet />
      </Box>
    </Box>
  );
};
