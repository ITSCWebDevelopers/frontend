import * as yup from 'yup';

export const creatingFormValidationSchema = yup.object({
  application: yup.string().required(),
  damage: yup.string().required(),
  contractor: yup.string().required(),
  date: yup.string().required(),
  description: yup.string().required(),
});

export type CreatingFormValidationSchema = yup.InferType<typeof creatingFormValidationSchema>;
