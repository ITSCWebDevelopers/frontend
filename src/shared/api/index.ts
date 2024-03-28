import {instance} from './instance';
import {tokenInterceptor} from './interceptors/tokenInterceptor';

instance.interceptors.request.use(tokenInterceptor);

export * from './instance';
export * from './requests';
