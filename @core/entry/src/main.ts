import { extendApp } from '@mrx/helper';
import type { Options } from 'vite-ssr/vue/types';
import app from 'app-root/index';

const { routes } = await extendApp(app());

const _routes = [
  {
    path: '/',
    component: () => import('./Page.vue'),
  },
  ...routes,
];

export const options: Options = {
  routes: _routes,
};
