import {instance} from '../..';
export type GetFindAddress = RequestConfig | void;

export const GetFindAddress = (params: GetFindAddress) =>
  instance.get('https://nominatim.openstreetmap.org/reverse', params?.config);
