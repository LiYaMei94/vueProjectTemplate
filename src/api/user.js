import { post, get } from '@/lib/axios';
import { routeInfo } from '@/mocks/routes';

export const login = (data) => {
  return post('/sysAdmin/login', data, { skipHandleResponse: true });
};

export const logout = (data) => {
  return post('/sysAdmin/logout', data, { skipHandleResponse: true });
};

export const code = (data) => {
  return get('/sysAdmin/captchaImage', data, { skipHandleResponse: true });
};

export const getRoutes = (data) => {
  return Promise.resolve(routeInfo);
};

export const getRoutesInfo = async (data) => {
  return get('/getRouters', data);
};

// 用户信息
export const getUserInfo = (data) => {
  return get('/getInfo', data);
};
