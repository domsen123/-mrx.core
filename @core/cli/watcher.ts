import { getLogger } from '@mrx/helper';

export const restartInitializer = async () => {
  const { default: nodemon } = await import('nodemon');
  nodemon({
    verbose: true,
    exec: 'pnpm exec mrx start',
    cwd: process.cwd(),
    watch: [process.cwd()],
    ignore: ['*.d.ts', '**/dist/*', '**/*.vue'],
    ignoreRoot: ['.git'],
    ext: 'ts',
  });
  nodemon
    .on('restart', (files: string[]) => {
      getLogger().info(`Restart: %o`, files);
    })
    .on('quit', () => {
      getLogger().info(`Stop!`);
      process.exit(0);
    });
};
