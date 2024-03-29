import {instance} from '@/shared/api';

export type getAplicationsConfig = RequestConfig | void;

export const getApplications = (params: getAplicationsConfig) =>
  instance.get<ApplicationShortDto[]>('/applications/', params?.config);
