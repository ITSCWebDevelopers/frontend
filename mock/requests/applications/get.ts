import type {RestRequestConfig} from 'mock-config-server';

export const getApplicationsConfig: RestRequestConfig = {
  method: 'get',
  path: '/applications',
  routes: [
    {
      data: [
        {
          id: '123',
          road_name: 'MI',
        },
        {
          id: '123',
          road_name: 'MI',
        },
        {
          id: '123',
          road_name: 'MI',
        },
        {
          id: '123',
          road_name: 'MI',
        },
        {
          id: '123',
          road_name: 'MI',
        },
        {
          id: '123',
          road_name: 'MI',
        },
      ],
    },
  ],
};
