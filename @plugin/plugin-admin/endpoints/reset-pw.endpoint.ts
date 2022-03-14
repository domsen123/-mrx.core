import { defineEndpoint } from '@mrx/helper';
import { PluginEndpoint } from '../types';

export const ResetPasswordEndpoint = defineEndpoint({
  url: PluginEndpoint.RESET_PASSWORD,
  method: 'POST',
  handler: async (req, reply) => {},
});
