import type { Component } from 'vue';
import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    layout?: () => Promise<Component>;
    needsAuth?: boolean;
  }
}
