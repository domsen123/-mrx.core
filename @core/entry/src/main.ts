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
  pageProps: {
    passToPage: false,
  },
};

export const main = async (ctx: MainContext) => {
  createInstance(ctx);
  installVuetify(ctx, theme);
  Object.values(import.meta.globEager('./modules/*.ts')).forEach((i) =>
    i.install?.(ctx),
  );
  // const { app } = ctx;
  // app.component(ClientOnly.name, ClientOnly);
  // apply setups
  await Promise.all(setup.map((s) => s(ctx)));

  const head = createHead();
  ctx.app.use(head);
  return { head };
};
