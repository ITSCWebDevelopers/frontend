import globalRouter from '../utils/globalRouter';
import {instance} from './instance';
import {tokenInterceptor} from './interceptors/tokenInterceptor';

instance.interceptors.request.use(tokenInterceptor);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401 && globalRouter.navigate) {
      globalRouter.navigate('/login');
      localStorage.clear();
    }

    return Promise.reject(error);
  },
);

export * from './instance';
export * from './requests';
