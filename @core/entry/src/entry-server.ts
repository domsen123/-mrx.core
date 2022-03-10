import { viteSSR } from 'vite-ssr/vue/entry-server';
import { options } from './main';
import App from './App.vue';

export default viteSSR(App, options);
