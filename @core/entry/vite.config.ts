import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import ViteSsr from 'vite-ssr/plugin';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';

export default defineConfig(async () => {
  const entryRoot = dirname(fileURLToPath(import.meta.url));
  const appRoot = process.cwd();
  const appSrc = resolve(appRoot, 'src');

  return {
    resolve: {
      alias: {
        'app-root/': `${appRoot}/`,
        '~/': `${appSrc}/`,
      },
    },
    plugins: [
      ViteSsr({
        ssr: resolve(entryRoot, 'src/entry-server.ts'),
      }),
      Vue(),
      AutoImport({
        imports: ['vue', 'vue-router', '@vueuse/core'],
        dts: resolve(appRoot, 'auto-imports.d.ts'),
      }),
      Components({
        resolvers: [IconsResolver()],
      }),
      Icons(),
    ],
    optimizeDeps: {
      include: [
        'vue',
        'vue-router',
        '@vueuse/core',
        '@vueuse/head',
        '@vueuse/router',
        'vuetify',
      ],
    },
  };
});
