import { defineEndpoint } from '@mrx/helper';
import { PluginEndpoint } from '../types';

export const SignUpEndpoint = defineEndpoint({
  url: PluginEndpoint.SIGN_UP,
  method: 'POST',
  handler: async (req, reply) => {},
});
