import type { AuthClientService } from './services/clientService';
import type { AuthServerService } from './services/serverService';

export interface PluginOptions {
  service?: AuthClientService;
}

export interface PluginServerOptionsWithService {
  service: AuthServerService;
}
export interface PluginServerOptionsDefault {
  secure_string: string;
  maxAge?: number;
}

export type PluginServerOptions =
  | PluginServerOptionsWithService
  | PluginServerOptionsDefault;

export enum PluginEndpoint {
  DETAILS = '/auth/details',
  RESET_PASSWORD = '/auth/reset_password',
  SIGN_IN = '/auth/sign_in',
  SIGN_OUT = '/auth/sign_out',
  SIGN_UP = '/auth/sign_up',
}

export interface IAuth {
  uuid: string;
  username: string;
}

export interface ISession {
  maxAge: number;
  refresh_token: string;
  token: string;
}
