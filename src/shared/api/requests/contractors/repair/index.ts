import {instance} from '@/shared/api';

export type postContractorRepairConfig = RequestConfig<CreateRepairDto>;

export const postContractorRepair = (id: string, {params, config}: postContractorRepairConfig) =>
  instance.post(`/damage/${id}/repair/`, params, config);
