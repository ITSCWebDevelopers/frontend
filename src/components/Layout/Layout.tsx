import {Box} from '@mui/material';
import {Outlet} from 'react-router-dom';
import {NavigationBar} from '../NavigationBar';
import {styles} from './Layout.styles';

export const Layout = () => (
  <Box sx={styles.wrapper}>
    <NavigationBar />
    <Box component='main' sx={styles.main}>
      <Outlet />
    </Box>
  </Box>
);
