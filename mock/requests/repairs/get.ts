import type {RestRequestConfig} from 'mock-config-server';

export const getRepairsConfig: RestRequestConfig = {
  method: 'get',
  path: '/repairs',
  routes: [
    {
      data: [
        {
          id: '1',
          road_name: 'Название какое-то',
          defect_type: 'Дефект какой-то',
          contractor_name: 'Какие то работяги',
          deadline: '2024-12-12',
        },
        {
          id: '2',
          road_name: 'Ещё Название какое-то',
          defect_type: 'Опять Дефект какой-то',
          contractor_name: 'Вновь какие то работяги',
        },
      ],
    },
  ],
};
