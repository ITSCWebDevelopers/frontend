export const ROUTES = {
  ROOT: '/',
  LOGIN: '/login',
  REPORT: (id?: string, roadName?: string) => `/report/?id=${id}&road=${roadName}`,
};
