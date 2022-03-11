import type { AppDefinition, AppSettings } from '@mrx/types';

export const extendApp = async (
  app: Promise<AppDefinition>,
  routes: any[] = [],
  settings: AppSettings = {},
) => {
  const {
    name: _ = '',
    routes: _r = [],
    plugins: _p = [],
    theme = {},
    settings: _s = {},
  } = await app;

  // apply routes
  _r.forEach((r: any) => routes.push(r));

  // apply settings
  settings = {
    ...settings,
    ..._s,
  };

  // apply plugins
  for (const p of _p) {
    await extendApp(p, routes, settings);
  }
  return { routes, theme, settings };
};
