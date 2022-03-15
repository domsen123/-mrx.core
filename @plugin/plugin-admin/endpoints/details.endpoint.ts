import { defineEndpoint } from '@mrx/helper';
import { isAuthenticated } from '../middlewares';
import { PluginEndpoint } from '../types';

export const DetailsEndpoint = defineEndpoint({
  url: PluginEndpoint.DETAILS,
  method: 'GET',
  preValidation: [isAuthenticated],
  handler: async (req, reply) => {
    reply.status(req.auth ? 200 : 401).send(req.auth);
  },
});
