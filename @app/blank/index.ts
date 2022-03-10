import adminPlugin from '@mrx/plugin-admin';
export default async () => ({
  name: '@app/blank',
  routes: [],
  plugins: [adminPlugin()],
});
