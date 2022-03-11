import type { Router } from 'vue-router';
import type { Context } from 'vite-ssr/vue';

export interface MainContext extends Context {
  router: Router;
}
