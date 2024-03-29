import type {RestRequestConfig} from 'mock-config-server';

export const getContractorsConfig: RestRequestConfig = {
  method: 'get',
  path: '/contractors',
  routes: [
    {
      data: [
        {
          id: '1',
          name: 'first',
          email: 'foskeopf@fposekf',
          phone: '09409283',
        },
        {
          id: '2',
          name: 'second',
          email: 'foskeopf@fposekf',
          phone: '09409283',
        },
        {
          id: '3',
          name: 'third',
          email: 'foskeopf@fposekf',
          phone: '09409283',
        },
        {
          id: '4',
          name: 'fourth',
          email: 'foskeopf@fposekf',
          phone: '09409283',
        },
        {
          id: '5',
          name: 'fifth',
          email: 'foskeopf@fposekf',
          phone: '09409283',
        },
        {
          id: '6',
          name: 'sixth',
          email: 'foskeopf@fposekf',
          phone: '09409283',
        },
      ],
    },
  ],
};
