import type { MainContext } from '@mrx/types';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { parseCookie } from './cookie';

let __instance: AxiosInstance;

const getCookieHeaders = (request?: any): any => {
  if (!request || !request.headers || !request.headers.cookie) return {};
  const cookieString = request.headers.cookie;
  const cookies: string[] = [];
  const access_token = parseCookie(cookieString, 'access_token');
  const refresh_token = parseCookie(cookieString, 'refresh_token');
  if (access_token) cookies.push(`access_token=${access_token}`);
  if (refresh_token) cookies.push(`refresh_token=${refresh_token}`);
  return {
    Cookie: cookies.join('; '),
  };
};

export const createInstance = async ({ isClient, request }: MainContext) => {
  __instance = axios.create({
    baseURL: isClient ? '/_api' : 'http://localhost:1337/_api',
    withCredentials: true,
  });
  __instance.interceptors.request.use((config) => {
    config.headers = {
      ...(config.headers ?? {}),
      ...getCookieHeaders(request),
    };
    return config;
  });
};

export const doRequest = async <T>(
  config: AxiosRequestConfig<any>,
): Promise<T> => {
  try {
    const result = await __instance.request<T>(config);
    return result.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      throw e.response;
    }
    throw e;
  }
};
