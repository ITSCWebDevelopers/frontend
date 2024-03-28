import type {RestRequestConfig} from 'mock-config-server';

export const getTasksConfig: RestRequestConfig = {
  method: 'get',
  path: '/tasks',
  routes: [
    {
      data: [
        {
          id: '1',
          report_id: '2',
          road_name: 'MI1',
          address: 'ул. Новособорная',
          coordinates: {
            id: '123',
            lat: 58,
            lng: 56,
          },
          defects_count: 2,
        },
        {
          id: '2',
          //report_id: '2',
          road_name: 'MI2',
          address: 'ул. Ленина',
          coordinates: {
            lat: 58,
            lng: 56,
            id: '123',
          },
          defects_count: null,
        },
        {
          id: '3',
          report_id: '3',
          road_name: 'MI3',
          address: 'ул. Калинина',
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
