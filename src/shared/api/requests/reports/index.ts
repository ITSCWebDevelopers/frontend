import {instance} from '@/shared/api';

export type getReportsConfig = RequestConfig | void;

export const getReports = (params: getReportsConfig) => instance.get<ReportModel[]>('/reports/', params?.config);
