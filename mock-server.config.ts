import type {MockServerConfig} from 'mock-config-server';

const mockServerConfig: MockServerConfig = {
  baseUrl: '/api',
  rest: {
    configs: [],
  },
  staticPath: {
    path: '/mock/static/images',
    prefix: '/static',
  },
};

export default mockServerConfig;
