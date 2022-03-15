import { defineEndpoint } from '@mrx/helper';
import type { SignUpRequest } from '../contracts';
import { useServerAuthService } from '../services';
import { PluginEndpoint } from '../types';

export const SignUpEndpoint = defineEndpoint({
  url: PluginEndpoint.SIGN_UP,
  method: 'POST',
  handler: async (req, reply) => {
    const { dtoSignUp } = req.body as SignUpRequest;
    const provider = useServerAuthService();
    const result = await provider.SignUp(dtoSignUp);

    const {
      session: { token, refresh_token, maxAge },
    } = result;
    const rMaxAge = maxAge * 2;

    reply
      .status(201)
      .headers({
        'set-cookie': [
          `access_token=${token}; Max-Age=${maxAge}; Path=/; HttpOnly`,
          `refresh_token=${refresh_token}; Max-Age=${rMaxAge}; Path=/; HttpOnly`,
        ],
      })
      .send(result);
  },
});
