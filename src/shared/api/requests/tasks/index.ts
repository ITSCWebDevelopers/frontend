import {instance} from '@/shared/api';

export type getTasksConfig = RequestConfig | void;

export const getTasks = (params: getTasksConfig) => instance.get<TaskModel[]>('/tasks/', params?.config);
