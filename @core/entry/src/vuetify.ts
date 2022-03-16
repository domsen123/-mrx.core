// import 'vuetify/styles';
import './styles/vuetify.scss';
import '~/styles/vuetify.scss';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import type { MainContext } from '@mrx/types';

export const installVuetify = async ({ app }: MainContext, theme: any) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme,
  });
  app.use(vuetify);
};
