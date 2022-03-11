import { defineApp } from '@mrx/helper';
import adminPlugin from '@mrx/plugin-admin';

export default defineApp(async () => ({
  name: '@app/blank',
  routes: [
    {
      path: '/',
      component: () => import('~/pages/Page.vue'),
    },
  ],
  plugins: [adminPlugin()],
  theme: {
    defaultTheme: 'light',
    themes: {
      dark: {
        dark: true,
        colors: {
          primary: '#32a852',
          secondary: '#2FA4FF',
        },
      },
      light: {
        dark: false,
        colors: {
          primary: '#0E185F',
          secondary: '#2FA4FF',
          aside: '#1e1e2d',
          asidecontrast: '#1a1a27',
        },
      },
    },
  },
  settings: {},
}));
