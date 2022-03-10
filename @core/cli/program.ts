import { resolve } from 'path';
import { Command } from 'commander';
import dotenv from 'dotenv';

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

  commander.parse(process.argv);
};
