import type { RouteRecordRaw } from 'vue-router';
import type { ThemeDefinition } from 'vuetify';
import type { AppSettings } from './settings';

export interface AppDefinition {
  name: string;
  routes?: RouteRecordRaw[];
  plugins?: Promise<AppDefinition>[];
  theme?: {
    defaultTheme?: string;
    variations?: false | { colors: string[]; lighten: number; darken: number };
    themes?: Record<string, ThemeDefinition>;
  };
  settings?: AppSettings;
}

export interface PluginDefinition
  extends Omit<AppDefinition, 'theme' | 'settings'> {}
