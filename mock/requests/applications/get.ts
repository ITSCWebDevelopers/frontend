import type {RestRequestConfig} from 'mock-config-server';

export const getApplicationsConfig: RestRequestConfig = {
  method: 'get',
  path: '/applications',
  routes: [
    {
      data: [
        {
          id: '1',
          road_name: 'first',
        },
        {
          id: '2',
          road_name: 'second',
        },
        {
          id: '3',
          road_name: 'third',
        },
        {
          id: '4',
          road_name: 'fourth',
        },
        {
          id: '5',
          road_name: 'fifth',
        },
        {
          id: '6',
          road_name: 'sixth',
        },
      ],
    },
  ],
};
