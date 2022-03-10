export default async () => ({
  name: '@mrx/plugin-admin',
  routes: [
    {
      path: '/_admin',
      component: () => import('./Admin.vue'),
    },
  ],
});
