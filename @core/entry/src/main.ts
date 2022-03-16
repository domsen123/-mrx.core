import app from 'app-root/index';
import { createHead } from '@vueuse/head';
import { createInstance, extendApp, setSettings } from '@mrx/helper';
import type { Options } from 'vite-ssr/vue/types';

import type { MainContext } from '@mrx/types';
import { installVuetify } from './vuetify';

const { routes, theme, settings, setup } = await extendApp(app());
setSettings(settings);

export const options: Options = {
  routes,
};

export const main = async (ctx: MainContext) => {
  createInstance(ctx);
  await installVuetify(ctx, theme);
  Object.values(import.meta.globEager('./modules/*.ts')).forEach((i) =>
    i.install?.(ctx),
  );
  const { app, router } = ctx;
  await Promise.all(setup.map((s) => s(ctx)));
  router.beforeEach((to) => {
    to.meta.state = {
      ...to.meta.state,
      route: to.name,
    };
  });
  const head = createHead();
  app.use(head);
  return { head };
};
