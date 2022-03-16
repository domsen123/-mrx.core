import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import ViteSsr from 'vite-ssr/plugin';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Vuetify from '@vuetify/vite-plugin';

const optimizeVuetify = [
  'vuetify/lib/components/VApp/index.mjs',
  'vuetify/lib/components/VAppBar/index.mjs',
  'vuetify/lib/components/VAlert/index.mjs',
  'vuetify/lib/components/VAutocomplete/index.mjs',
  'vuetify/lib/components/VAvatar/index.mjs',
  'vuetify/lib/components/VBadge/index.mjs',
  'vuetify/lib/components/VBanner/index.mjs',
  'vuetify/lib/components/VBottomNavigation/index.mjs',
  'vuetify/lib/components/VBreadcrumbs/index.mjs',
  'vuetify/lib/components/VBtn/index.mjs',
  'vuetify/lib/components/VBtnGroup/index.mjs',
  'vuetify/lib/components/VBtnToggle/index.mjs',
  'vuetify/lib/components/VCard/index.mjs',
  'vuetify/lib/components/VCheckbox/index.mjs',
  'vuetify/lib/components/VChip/index.mjs',
  'vuetify/lib/components/VChipGroup/index.mjs',
  'vuetify/lib/components/VCode/index.mjs',
  'vuetify/lib/components/VColorPicker/index.mjs',
  'vuetify/lib/components/VCounter/index.mjs',
  'vuetify/lib/components/VDefaultsProvider/index.mjs',
  'vuetify/lib/components/VDialog/index.mjs',
  'vuetify/lib/components/VDivider/index.mjs',
  'vuetify/lib/components/VExpansionPanel/index.mjs',
  'vuetify/lib/components/VField/index.mjs',
  'vuetify/lib/components/VFileInput/index.mjs',
  'vuetify/lib/components/VFooter/index.mjs',
  'vuetify/lib/components/VForm/index.mjs',
  'vuetify/lib/components/VGrid/index.mjs',
  'vuetify/lib/components/VHover/index.mjs',
  'vuetify/lib/components/VIcon/index.mjs',
  'vuetify/lib/components/VImg/index.mjs',
  'vuetify/lib/components/VInput/index.mjs',
  'vuetify/lib/components/VItemGroup/index.mjs',
  'vuetify/lib/components/VKbd/index.mjs',
  'vuetify/lib/components/VLabel/index.mjs',
  'vuetify/lib/components/VLayout/index.mjs',
  'vuetify/lib/components/VLazy/index.mjs',
  'vuetify/lib/components/VList/index.mjs',
  'vuetify/lib/components/VLocaleProvider/index.mjs',
  'vuetify/lib/components/VMain/index.mjs',
  'vuetify/lib/components/VMenu/index.mjs',
  'vuetify/lib/components/VMessages/index.mjs',
  'vuetify/lib/components/VNavigationDrawer/index.mjs',
  'vuetify/lib/components/VNoSsr/index.mjs',
  'vuetify/lib/components/VOverlay/index.mjs',
  'vuetify/lib/components/VPagination/index.mjs',
  'vuetify/lib/components/VParallax/index.mjs',
  'vuetify/lib/components/VProgressCircular/index.mjs',
  'vuetify/lib/components/VProgressLinear/index.mjs',
  'vuetify/lib/components/VRadio/index.mjs',
  'vuetify/lib/components/VRadioGroup/index.mjs',
  'vuetify/lib/components/VRangeSlider/index.mjs',
  'vuetify/lib/components/VRating/index.mjs',
  'vuetify/lib/components/VResponsive/index.mjs',
  'vuetify/lib/components/VSelect/index.mjs',
  'vuetify/lib/components/VSelectionControl/index.mjs',
  'vuetify/lib/components/VSelectionControlGroup/index.mjs',
  'vuetify/lib/components/VSheet/index.mjs',
  'vuetify/lib/components/VSlideGroup/index.mjs',
  'vuetify/lib/components/VSlider/index.mjs',
  'vuetify/lib/components/VSnackbar/index.mjs',
  'vuetify/lib/components/VSwitch/index.mjs',
  'vuetify/lib/components/VSystemBar/index.mjs',
  'vuetify/lib/components/VTabs/index.mjs',
  'vuetify/lib/components/VTable/index.mjs',
  'vuetify/lib/components/VTextarea/index.mjs',
  'vuetify/lib/components/VTextField/index.mjs',
  'vuetify/lib/components/VThemeProvider/index.mjs',
  'vuetify/lib/components/VTimeline/index.mjs',
  'vuetify/lib/components/VToolbar/index.mjs',
  'vuetify/lib/components/VTooltip/index.mjs',
  'vuetify/lib/components/VValidation/index.mjs',
  'vuetify/lib/components/VWindow/index.mjs',
  'vuetify/lib/components/transitions/index.mjs',
];

export default defineConfig(async () => {
  const entryRoot = dirname(fileURLToPath(import.meta.url));
  const appRoot = process.cwd();
  const appSrc = resolve(appRoot, 'src');

  return {
    resolve: {
      alias: {
        'entry-src/': `${resolve(entryRoot, 'src')}/`,
        'app-root/': `${appRoot}/`,
        '~/': `${appSrc}/`,
      },
    },
    plugins: [
      ViteSsr({
        ssr: resolve(entryRoot, 'src/entry-server.ts'),
      }),
      Vue(),
      Vuetify({
        styles: 'expose',
      }),
      AutoImport({
        imports: ['vue', 'vue-router', '@vueuse/core'],
        dts: resolve(appRoot, 'auto-imports.d.ts'),
      }),
      Components({
        resolvers: [IconsResolver()],
      }),
      Icons(),
    ],
    optimizeDeps: {
      include: [
        'vue',
        'vue-router',
        '@vueuse/core',
        '@vueuse/head',
        '@vueuse/router',
        ...optimizeVuetify,
      ],
    },
  };
});
