import type { FastifyReply, FastifyRequest } from 'fastify';
export type FastifyHandler = (
  req: FastifyRequest,
  reply: FastifyReply,
) => Promise<void>;
