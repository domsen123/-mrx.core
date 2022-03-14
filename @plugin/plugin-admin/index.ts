import { definePlugin } from '@mrx/helper';
import { defineClientAuthService, useClientAuthService } from './services';
import { AuthClientService } from './services/clientService';
import type { PluginOptions } from './types';

export default definePlugin(async (options: PluginOptions = {}) => {
  const { service = new AuthClientService() } = options;
  defineClientAuthService(service);

  return {
    name: '@mrx/plugin-admin',
    routes: [
      {
        path: '/_admin',
        component: () => import('./src/pages/admin/Dashboard.vue'),
        meta: {
          layout: () => import('./src/layouts/AdminLayout.vue'),
        },
      },
      {
        path: '/_auth',
        component: () => import('./src/pages/auth/AuthWrapper.vue'),
        meta: {
          layout: () => import('./src/layouts/AuthLayout.vue'),
        },
        children: [
          {
            path: '',
            component: () => import('./src/pages/auth/SignIn.vue'),
          },
          {
            path: 'sign-up',
            component: () => import('./src/pages/auth/SignUp.vue'),
          },
          {
            path: 'reset',
            component: () => import('./src/pages/auth/PasswordReset.vue'),
          },
        ],
      },
    ],
    setup: [
      async ({ router, isClient }) => {
        const service = useClientAuthService();
        try {
          await service.Details();
          console.log(
            `[${isClient ? 'client' : 'server'}] Is Authenticated: true`,
          );
        } catch (e: any) {
          console.log(
            `[${isClient ? 'client' : 'server'}] Is Authenticated: false`,
          );
        }
      },
    ],
  };
});
