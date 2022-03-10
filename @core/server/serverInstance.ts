import fastify from 'fastify';
import { viteSsrDevHandler } from '@mrx/entry/ssrHandler';
import middie from 'middie';

export const startInstance = async () => {
  const app = fastify({
    logger: false,
  });
  await app.register(middie);

  await viteSsrDevHandler(app, '/_api');

  try {
    await app.listen(1337);
  } catch (e: any) {
    console.error(e.message);
  }
};
