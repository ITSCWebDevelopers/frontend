import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigate} from 'react-router-dom';
import {type LoginValidationSchema, loginValidationSchema} from './LoginForm.constants';
import {useAppDispatch} from '@/shared/hooks/redux';
import {loginAction} from '@/store/user/userAsyncActions';
import {ROUTES} from '@/shared/constants/routes';
import {ERRORS} from '@/shared/constants/errors';

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: {errors},
  } = useForm<LoginValidationSchema>({resolver: yupResolver(loginValidationSchema)});
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
