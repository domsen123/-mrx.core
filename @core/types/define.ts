import type { RouteRecordRaw } from 'vue-router';
import type { ThemeDefinition } from 'vuetify';
import type { MainContext } from './context';
import type { AppSettings, ServerSettings } from './settings';

export interface AppDefinition {
  name: string;
  routes?: RouteRecordRaw[];
  plugins?: Promise<AppDefinition>[];
  setup?: ((ctx: MainContext) => Promise<void>)[];
  theme?: {
    defaultTheme?: string;
    variations?: false | { colors: string[]; lighten: number; darken: number };
    themes?: Record<string, ThemeDefinition>;
  };
  settings?: AppSettings;
}

export interface PluginDefinition
  extends Omit<AppDefinition, 'theme' | 'settings'> {}

export interface ServerDefinition {
  name: string;
  endpoints?: any[];
  plugins?: Promise<ServerDefinition>[];
  settings?: ServerSettings;
}

export interface PluginServerDefinition
  extends Omit<ServerDefinition, 'settings'> {}
