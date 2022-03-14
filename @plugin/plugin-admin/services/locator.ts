import type { AuthClientService } from './clientService';
import type { AuthServerService } from './serverService';

let __clientAuthService: any;
let __serverAuthService: any;

export const defineClientAuthService = (s: AuthClientService) =>
  (__clientAuthService = s);
export const defineServerAuthService = (s: AuthServerService) =>
  (__serverAuthService = s);

export const useClientAuthService = (): AuthClientService =>
  __clientAuthService;
export const useServerAuthService = (): AuthServerService =>
  __serverAuthService;
