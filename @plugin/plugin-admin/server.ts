import { definePluginServer } from '@mrx/helper';
import {
  DetailsEndpoint,
  SignInEndpoint,
  SignOutEndpoint,
  SignUpEndpoint,
} from './endpoints';
import { defineServerAuthService } from './services';
import { AuthServerService } from './services/serverService';
import type {
  PluginServerOptions,
  PluginServerOptionsDefault,
  PluginServerOptionsWithService,
} from './types';

export default definePluginServer(async (options: PluginServerOptions) => {
  if ((options as PluginServerOptionsWithService).service) {
    defineServerAuthService(
      (options as PluginServerOptionsWithService).service,
    );
  } else {
    const _o = options as PluginServerOptionsDefault;
    defineServerAuthService(new AuthServerService(_o.secure_string, _o.maxAge));
  }
  return {
    name: '@mrx/plugin-admin/server',
    endpoints: [
      SignInEndpoint,
      SignUpEndpoint,
      SignOutEndpoint,
      DetailsEndpoint,
    ],
  };
});
