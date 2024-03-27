import * as yup from 'yup';
import {ERRORS} from '@/shared/constants/errors';

export const loginValidationSchema = yup.object({
  username: yup.string().required(ERRORS.REQUIRED),
  password: yup.string().required(ERRORS.REQUIRED),
});

export type LoginValidationSchema = yup.InferType<typeof loginValidationSchema>;
