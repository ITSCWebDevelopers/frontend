import type {RestRequestConfig} from 'mock-config-server';

export const getDamagesConfig: RestRequestConfig = {
  method: 'get',
  path: '/applications/:id/damages',
  routes: [
    {
      data: [
        {
          id: '123',
          damage_type: 'MI',
          address: 'faefa[ef[ae',
        },
        {
          id: '123',
          damage_type: 'MI',
          address: 'faefa[ef[ae',
        },
        {
          id: '123',
          damage_type: 'MI',
          address: 'faefa[ef[ae',
        },
        {
          id: '123',
          damage_type: 'MI',
          address: 'faefa[ef[ae',
        },
        {
          id: '123',
          damage_type: 'MI',
          address: 'faefa[ef[ae',
        },
      ],
    },
  ],
};
