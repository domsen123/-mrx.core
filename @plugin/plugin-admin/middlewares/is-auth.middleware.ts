/* eslint-disable no-console */
import { defineGuard, parseCookie } from '@mrx/helper';
import { useServerAuthService } from '../services';

export const isAuthenticated = defineGuard(async (req, _) => {
  const service = useServerAuthService();
  if (req.headers.cookie) {
    const access_token = parseCookie(req.headers.cookie, 'access_token');
    if (access_token) {
      req.auth = await service.Details(access_token);
      req.token = access_token;
    }
  }
});
