import type {RestRequestConfig} from 'mock-config-server';

export const getTasksConfig: RestRequestConfig = {
  method: 'get',
  path: '/tasks',
  routes: [
    {
      data: [
        {
          id: '123',
          report_id: '123',
          road_name: 'MI',
          address: 'ул. Новособорная',
          coordinates: {
            id: '123',
            lat: 58,
            lng: 56,
          },
          defects_count: 2,
        },
        {
          id: '123',
          report_id: '123',
          road_name: 'MI',
          address: 'ул. Ленина',
          coordinates: {
            lat: 58,
            lng: 56,
            id: '123',
          },
          defects_count: null,
        },
        {
          id: '123',
          report_id: '123',
          road_name: 'MI',
          address: 'ул. Ленина',
          coordinates: {
            lat: 58,
            lng: 56,
            id: '123',
          },
          defects_count: 2,
        },
      ],
    },
  ],
};
