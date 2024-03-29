export const ROUTES = {
  ROOT: '/',
  LOGIN: '/login',
  REPORT: (id?: string, roadName?: string) => `/report?reportId=${id}&roadName=${roadName}`,
  DEFECT: (defectName: string) => `/defect?defectName=${defectName}`,
  ASSIGNMENT: '/assignment',
  CREATING_ASSIGNMENT: '/creating-assignment',
};
