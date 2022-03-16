// import 'vuetify/styles';
// import 'entry-src/styles/vuetify.scss';

// import * as components from 'vuetify/components';
// import * as directives from 'vuetify/directives';
import '~/styles/vuetify.scss';
import { createVuetify } from 'vuetify';
import type { MainContext } from '@mrx/types';

export const installVuetify = async ({ app }: MainContext, theme: any) => {
  app.use(createVuetify({ theme }));
};
