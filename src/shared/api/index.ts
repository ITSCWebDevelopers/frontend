import {instance} from './instance';
import {tokenInterceptor} from './interceptors/tokenInterceptor';

instance.interceptors.request.use(tokenInterceptor);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = '/login';
      localStorage.clear();
    }
  },
);

export * from './instance';
export * from './requests';
