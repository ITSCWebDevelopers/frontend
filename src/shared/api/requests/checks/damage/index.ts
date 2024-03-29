import {instance} from '@/shared/api';

export type getDefectInfoConfig = RequestConfig | void;

export const getDefectInfo = (checkId: string, defectId: string, params: getDefectInfoConfig) =>
  instance.get<DefectInfoModel>(`check/${checkId}/damage/${defectId}`, params?.config);
