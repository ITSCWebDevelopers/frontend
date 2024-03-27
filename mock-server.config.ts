import type {MockServerConfig} from 'mock-config-server';
import * as REQUESTS from './mock/requests';

const mockServerConfig: MockServerConfig = {
  baseUrl: '/api',
  rest: {
    configs: Object.values(REQUESTS),
  },
};

export default mockServerConfig;
