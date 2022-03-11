import type { AppDefinition } from '@mrx/types';

export const extendApp = async (
  app: Promise<AppDefinition>,
  routes: any[] = [],
) => {
  const {
    name: _ = '',
    routes: _r = [],
    plugins: _p = [],
    theme = {},
  } = await app;
  _r.forEach((r: any) => routes.push(r));
  for (const p of _p) {
    await extendApp(p, routes);
  }
  return { routes, theme };
};
