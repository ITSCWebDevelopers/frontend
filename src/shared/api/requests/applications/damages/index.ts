import {instance} from '@/shared/api';

export type getAplicationsDamagesConfig = RequestConfig | void;

export const getApplicationDamages = (id: string, params: getAplicationsDamagesConfig) =>
  instance.get<DamageShortDto[]>(`/applications/${id}/damages/`, params?.config);
