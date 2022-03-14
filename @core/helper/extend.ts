import type {
  AppDefinition,
  AppSettings,
  ServerDefinition,
  ServerSettings,
} from '@mrx/types';

export const extendApp = async (
  app: Promise<AppDefinition>,
  routes: any[] = [],
  setup: any[] = [],
  settings: AppSettings = {},
) => {
  const {
    name: _ = '',
    routes: _r = [],
    plugins: _p = [],
    setup: _se = [],
    theme = {},
    settings: _s = {},
  } = await app;

  // apply routes
  _r.forEach((r: any) => routes.push(r));
  // apply setups
  _se.forEach((s: any) => setup.push(s));

  // apply settings
  settings = {
    ...settings,
    ..._s,
  };

  // apply plugins
  for (const p of _p) {
    await extendApp(p, routes, setup, settings);
  }
  return { routes, theme, settings, setup };
};

export const extendServer = async (
  server: Promise<ServerDefinition>,
  endpoints: any[] = [],
  settings: ServerSettings = {},
) => {
  const {
    name: _ = '',
    endpoints: _e = [],
    plugins: _p = [],
    settings: _s = {},
  } = await server;

  // apply endpoints
  _e.forEach((e: any) => endpoints.push(e));

  // apply settings
  settings = {
    ...settings,
    _s,
  };

  // apply endpoints
  for (const p of _p) {
    await extendServer(p, endpoints, settings);
  }
  return { endpoints, settings };
};
