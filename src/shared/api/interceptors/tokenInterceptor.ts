export const tokenInterceptor = (config: any) => {
  const token = localStorage.getItem('token');

  if (token && config.headers) {
    config.headers.Authorization = `Token ${token}`;
  }

  return config;
};
