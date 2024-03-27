import {Box} from '@mui/material';
import {LoginForm} from './components/LoginForm';
import {styles} from './LoginModule.styles';

export const LoginModule = () => (
  <Box sx={styles.wrapper}>
    <LoginForm />
  </Box>
);
