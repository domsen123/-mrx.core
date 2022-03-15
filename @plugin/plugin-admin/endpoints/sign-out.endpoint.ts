import { defineEndpoint } from '@mrx/helper';
import { useServerAuthService } from '../services';
import { PluginEndpoint } from '../types';

export const SignOutEndpoint = defineEndpoint({
  url: PluginEndpoint.SIGN_OUT,
  method: 'GET',
  handler: async (req, reply) => {
    const provider = useServerAuthService();
    if (req.token) await provider.SignOut(req.token);

    reply
      .headers({
        'set-cookie': [
          `access_token=_; Max-Age=-1; Path=/; HttpOnly`,
          `refresh_token=_; Max-Age=-1; Path=/; HttpOnly`,
        ],
      })
      .send();
  },
});
