import type { App } from 'vue';
import type { Router } from 'vue-router';
import type { Context } from 'vite-ssr/vue';

export interface MainContext extends Context {
  app: App;
  router: Router;
}
