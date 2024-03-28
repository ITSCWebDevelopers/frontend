import type {RestRequestConfig} from 'mock-config-server';

export const getDamagesConfig: RestRequestConfig = {
  method: 'get',
  path: '/applications/:id/damages',
  routes: [
    {
      data: [
        {
          id: '1',
          damage_type: 'first',
          address: 'faefa[ef[ae',
        },
        {
          id: '2',
          damage_type: 'second',
          address: 'faefa[ef[ae',
        },
        {
          id: '3',
          damage_type: 'third',
          address: 'faefa[ef[ae',
        },
        {
          id: '4',
          damage_type: 'fourth',
          address: 'faefa[ef[ae',
        },
        {
          id: '5',
          damage_type: 'fifth',
          address: 'faefa[ef[ae',
        },
      ],
    },
  ],
};
