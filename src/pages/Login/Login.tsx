import {Box, Typography} from '@mui/material';
import {styles} from './Login.styles';
import {LoginModule} from '@/modules/LoginModule';

export const Login = () => (
  <Box sx={styles.wrapper}>
    <Typography variant='h2'>Авторизация</Typography>
    <LoginModule />
  </Box>
);
