import type {
  AppDefinition,
  FastifyHandler,
  PluginDefinition,
  PluginServerDefinition,
  ServerDefinition,
} from '@mrx/types';
import type { FastifyReply, FastifyRequest, HTTPMethods } from 'fastify';

// User App / Server
export const defineApp = <T = void>(
  fn: (options: T) => Promise<AppDefinition>,
) => fn;
export const defineServer = <T = void>(
  fn: (options: T) => Promise<ServerDefinition>,
) => fn;

// Plugin App / Server
export const definePlugin = <T = void>(
  fn: (options: T) => Promise<PluginDefinition>,
) => fn;

export const definePluginServer = <T = void>(
  fn: (options: T) => Promise<PluginServerDefinition>,
) => fn;

export const defineEndpoint = (fn: {
  url: string;
  method: HTTPMethods;
  preValidation?: FastifyHandler[];
  handler: FastifyHandler;
}) => fn;

export const defineGuard = (fn: FastifyHandler) => fn;
