import { dirname, resolve } from 'path';
import { Command } from 'commander';
import dotenv from 'dotenv';
import { buildSsr } from '@mrx/entry';
import { getLogger } from '@mrx/helper';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const path = resolve(process.cwd(), '.env');
dotenv.config({ path });

const commander = new Command();

/**
 * Handle the CLI using Commander
 * Set up initial Node environment
 */
export const execute = async (): Promise<void> => {
  commander.command('start').action(async () => {
    const { startInstance } = await import('@mrx/server');
    await startInstance();
  });
  commander.command('build').action(async () => {
    await buildSsr();
    // const { default: userConfig } = await import('@mrx/entry/vite.config');
    // const result = await buildSsr({
    //   clientOptions: {
    //     css: { preprocessorOptions: { scss: { charset: false } } },
    //     build: {
    //       target: 'esnext',
    //       emptyOutDir: true,
    //       rollupOptions: {},
    //     },
    //   },
    //   serverOptions: {
    //     build: {
    //       // target: 'esnext',
    //       emptyOutDir: true,
    //       rollupOptions: {
    //         // external: ['vue', 'vuetify'],
    //       },
    //     },
    //   },
    // });
  });

  commander.parse(process.argv);
};
