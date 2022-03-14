import { defineEndpoint } from '@mrx/helper';
import type { SignInRequest } from '../contracts';
import { useServerAuthService } from '../services';
import { PluginEndpoint } from '../types';

export const SignInEndpoint = defineEndpoint({
  url: PluginEndpoint.SIGN_IN,
  method: 'POST',
  handler: async (req, reply) => {
    const { dtoSignIn } = req.body as SignInRequest;
    const provider = useServerAuthService();
    const result = await provider.SignIn(dtoSignIn);

    const {
      session: { token, refresh_token, maxAge },
    } = result;
    const rMaxAge = maxAge * 2;

    reply
      .headers({
        'set-cookie': [
          `access_token=${token}; Max-Age=${maxAge}; Path=/; HttpOnly`,
          `refresh_token=${refresh_token}; Max-Age=${rMaxAge}; Path=/; HttpOnly`,
        ],
      })
      .send(result);
  },
});
