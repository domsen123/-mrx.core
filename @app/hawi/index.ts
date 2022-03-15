import { defineApp } from '@mrx/helper';
import '@fontsource/montserrat/latin.css';
import './src/styles/main.scss';
import './src/styles/custom.scss';

export default defineApp(async () => ({
  name: '@app/blank',
  routes: [
    {
      path: '/',
      component: () => import('~/layouts/Default.vue'),
      children: [
        {
          path: '',
          component: () => import('~/pages/Home.vue'),
        },
      ],
    },
  ],
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          primary: '#0ac775',
          secondary: '#2FA4FF',
          background: '#233142',
        },
      },
      light: {
        dark: false,
        colors: {
          primary: '#0ac775',
          secondary: '#2FA4FF',
        },
      },
    },
  },
  settings: {},
}));
