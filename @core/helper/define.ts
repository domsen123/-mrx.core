import type { AppDefinition, PluginDefinition } from '@mrx/types';

export const defineApp = <T = void>(
  fn: (options: T) => Promise<AppDefinition>,
) => fn;
export const definePlugin = <T = void>(
  fn: (options: T) => Promise<PluginDefinition>,
) => fn;
export const defineServer = (fn: () => Promise<any>) => fn;
