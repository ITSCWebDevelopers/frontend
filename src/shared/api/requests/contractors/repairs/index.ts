import {instance} from '@/shared/api';

export type getRepairsConfig = RequestConfig | void;

export const getRepairs = (params: getRepairsConfig) => instance.get<RepairShortDto[]>('/repairs/', params?.config);
