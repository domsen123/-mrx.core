import { defineServer } from '@mrx/helper';
import adminPluginServer from '@mrx/plugin-admin/server';
export default defineServer(async () => ({
  name: '@app/blank/server',
  plugins: [
    adminPluginServer({
      secure_string: '6ebbcbeb-8a13-4cdc-9d57-cb02408cf404',
    }),
  ],
}));
