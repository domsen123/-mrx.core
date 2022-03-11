import { definePlugin } from '@mrx/helper';

export default definePlugin(async () => ({
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
}));
