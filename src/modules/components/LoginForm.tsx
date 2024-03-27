import {Box, Button, TextField} from '@mui/material';
import {useLoginForm} from './LoginForm.hooks';
import {styles} from './LoginForm.styles';

export const LoginForm = () => {
  const {onSubmit, register, errors} = useLoginForm();

  return (
    <Box component='form' sx={styles.form} onSubmit={onSubmit}>
      <TextField
        label='username'
        helperText={errors.username?.message}
        id='username'
        error={!!errors.username}
        inputProps={{...register('username')}}
      />
      <TextField
        label='Пароль'
        helperText={errors.password?.message}
        id='password'
        error={!!errors.password}
        inputProps={{...register('password')}}
      />
      <Button type='submit' size='large' variant='contained'>
        Войти
      </Button>
    </Box>
  );
};
