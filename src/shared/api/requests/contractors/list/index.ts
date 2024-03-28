import {instance} from '@/shared/api';

export type getContractorsConfig = RequestConfig | void;

export const getContractors = (params: getContractorsConfig) =>
  instance.get<ContractorModel[]>('/contractors/', params?.config);
