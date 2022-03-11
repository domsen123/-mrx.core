import { createHead } from '@vueuse/head';
import { extendApp, setSettings } from '@mrx/helper';
import type { Options } from 'vite-ssr/vue/types';
import app from 'app-root/index';
import { installVuetify } from './vuetify';

const { routes, theme, settings } = await extendApp(app());
setSettings(settings);

export const options: Options = {
  routes,
  pageProps: {
    passToPage: false,
  },
};

export const main = async (ctx: any) => {
  installVuetify(ctx, theme);
  Object.values(import.meta.globEager('./modules/*.ts')).forEach((i) =>
    i.install?.(ctx),
  );
  const head = createHead();
  ctx.app.use(head);
  return { head };
};
