import type {RestRequestConfig} from 'mock-config-server';

export const postRepairConfig: RestRequestConfig = {
  method: 'post',
  path: '/damage/:id/repair',
  routes: [
    {
      data: {},
      entities: {
        body: {
          contractor: {checkMode: 'exists'},
          description: {checkMode: 'exists'},
        },
      },
    },
  ],
};
