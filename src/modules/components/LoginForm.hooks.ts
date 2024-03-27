import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {type LoginValidationSchema, loginValidationSchema} from './LoginForm.constants';

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginValidationSchema>({resolver: yupResolver(loginValidationSchema)});

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  return {register, onSubmit, errors};
};
