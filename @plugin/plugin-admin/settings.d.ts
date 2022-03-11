import type { Component } from 'vue';
import '@mrx/types';

declare module '@mrx/types' {
  interface AppSettings {
    logo?: () => Promise<Component>;
    admin?: {
      auth?: {
        backgroundUrl?: string;
      };
    };
  }
}
