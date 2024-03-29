import {ERRORS} from '@/shared/constants/errors';
import {ROUTES} from '@/shared/constants/routes';
import {useAppDispatch} from '@/shared/hooks/redux';
import {loginAction} from '@/store/user/userAsyncActions';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {loginValidationSchema, type LoginValidationSchema} from './LoginForm.constants';

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: {errors},
  } = useForm<LoginValidationSchema>({
    resolver: yupResolver(loginValidationSchema),
    defaultValues: {username: 'mikhail@gmail.com', password: 'Morishima@2005'},
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit(async (data) => {
    const res = await dispatch(loginAction(data));

    if (res.meta.requestStatus === 'rejected') {
      setError('root', {message: ERRORS.LOGIN_CONFIRM});
    } else navigate(ROUTES.ROOT);
  });

  return {register, onSubmit, errors};
};
