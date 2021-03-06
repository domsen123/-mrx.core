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
  interface ServerSettings {
    api_prefix?: string;
    server_port?: number;
  }
}
