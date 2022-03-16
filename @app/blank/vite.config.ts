import { defineConfig, mainConfig, mergeConfig } from '@mrx/entry';

export default mergeConfig(
  defineConfig({
    optimizeDeps: {
      exclude: ['@mrx/plugin-admin'],
    },
  }),
  mainConfig,
);
