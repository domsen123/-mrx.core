import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteSsr from 'vite-ssr/plugin';

export default defineConfig({
  resolve: {
    alias: {
      'app-root/': `${process.cwd()}/`,
      '~/': `${resolve(process.cwd(), 'src')}/`,
    },
  },
  plugins: [
    viteSsr({
      ssr: resolve(
        dirname(fileURLToPath(import.meta.url)),
        'src/entry-server.ts',
      ),
    }),
    vue(),
  ],
  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head'],
  },
});
