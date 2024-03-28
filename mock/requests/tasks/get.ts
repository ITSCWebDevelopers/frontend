import type {RestRequestConfig} from 'mock-config-server';

export const getTasksConfig: RestRequestConfig = {
  method: 'get',
  path: '/tasks',
  routes: [
    {
      data: [
        {
          id: '123',
          idApplication: '123',
          roadName: 'MI',
          address: 'ул. Новособорная',
          coordinates: {
            lat: 44,
            lng: 32,
          },
          defectsCount: 2,
        },
        {
          id: '123',
          roadName: 'MI',
          address: 'ул. Ленина',
          coordinates: {
            lat: 44,
            lng: 32,
          },
          defectsCount: 0,
        },
        {
          id: '123',
          idApplication: '123',
          roadName: 'MI',
          address: 'ул. Ленина',
          coordinates: {
            lat: 44,
            lng: 32,
          },
          defectsCount: 2,
        },
      ],
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
