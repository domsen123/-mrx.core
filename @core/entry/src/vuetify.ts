// import 'vuetify/styles';
import './styles/mrx.scss';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import type { MainContext } from '@mrx/types';

export const installVuetify = ({ app }: MainContext, theme: any) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme,
  });
  app.use(vuetify);
};
