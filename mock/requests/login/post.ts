import type {RestRequestConfig} from 'mock-config-server';

export const postLoginConfig: RestRequestConfig = {
  method: 'post',
  path: '/auth/login',
  routes: [
    {
      data: {
        token: '124125125',
      },
      entities: {
        body: {
          username: 'mikhail@gmail.com',
          password: 'Morishima@2005',
        },
      },
    },
    {
      data: {},
      interceptors: {
        response: (data, params) => {
          params.setStatusCode(400);

          return data;
        },
      },
    },
  ],
};
