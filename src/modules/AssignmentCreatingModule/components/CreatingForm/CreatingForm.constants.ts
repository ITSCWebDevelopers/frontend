import * as yup from 'yup';
import {ERRORS} from '@/shared/constants/errors';

export const creatingFormValidationSchema = yup.object({
  application: yup.string().required(ERRORS.REQUIRED),
  damage: yup.string().required(ERRORS.REQUIRED),
  contractor: yup.string().required(ERRORS.REQUIRED),
  date: yup.string(),
  description: yup.string().required(ERRORS.REQUIRED),
});

export type CreatingFormValidationSchema = yup.InferType<typeof creatingFormValidationSchema>;
