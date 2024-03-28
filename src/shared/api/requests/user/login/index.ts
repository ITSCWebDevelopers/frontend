import {instance} from '@/shared/api';

export type postLoginConfig = RequestConfig<LoginCredintails>;

export const postLogin = ({params, config}: postLoginConfig) =>
  instance.post<TokenResponse>('/auth/login/', params, config);
