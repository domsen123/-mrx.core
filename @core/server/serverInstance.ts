import { resolve } from 'path';
import fastify from 'fastify';
import { viteSsrDevHandler } from '@mrx/entry/ssrHandler';
import middie from 'middie';
import { extendServer, getLogger } from '@mrx/helper';
import { importIfExists } from '@mrx/helper/serverUtils';
import type { ServerDefinition } from '@mrx/types';

const DEFAULT_API_PREFIX = '/_api';
const DEFAULT_PORT = 1337;

export const startInstance = async () => {
  const app = fastify({
    logger: false,
  });
  await app.register(middie);

  let apiPrefix = DEFAULT_API_PREFIX;
  let serverPort = DEFAULT_PORT;

  const server = await importIfExists<() => Promise<ServerDefinition>>(
    resolve(process.cwd(), 'server.ts'),
  );

  if (server) {
    const { endpoints, settings } = await extendServer(server.default());
    if (settings.api_prefix) apiPrefix = settings.api_prefix;
    if (settings.server_port) serverPort = settings.server_port;

    for (const endpoint of endpoints) {
      await app.route({
        url: `${apiPrefix}${endpoint.url}`,
        method: endpoint.method,
        preValidation: endpoint.preValidation,
        handler: endpoint.handler,
      });
    }
  }

  await viteSsrDevHandler(app, apiPrefix);

  try {
    // console.log(app.printRoutes());
    await app.listen(serverPort);
    getLogger().info(`👂 Server is listening on port ${serverPort}`);
  } catch (e: any) {
    console.error(e.message);
  }
};
