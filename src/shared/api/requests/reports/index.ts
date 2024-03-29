import {instance} from '@/shared/api';

export type getReportsConfig = RequestConfig | void;

export const getReport = (reportId: any, params: getReportsConfig) =>
  instance.get<ReportModel>(`/check/${reportId}/`, params?.config);
