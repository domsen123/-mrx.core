import { defineEndpoint } from '@mrx/helper';
import { PluginEndpoint } from '../types';

export const SignOutEndpoint = defineEndpoint({
  url: PluginEndpoint.SIGN_OUT,
  method: 'POST',
  handler: async (req, reply) => {},
});
