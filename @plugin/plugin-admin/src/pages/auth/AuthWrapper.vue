<template lang="pug">
v-layout.auth-wrapper(fluid :style="styles")
  v-spacer
  v-col.auth-column(cols="3")
    v-app-bar(flat)
      v-btn(v-if="source" icon @click="$router.back()") #[icon-back]
    v-container.px-8
      app-logo
      .mt-10
        router-view

</template>

<script lang="ts" setup>
import { setting } from '@mrx/helper';
import { useRouteQuery } from '@vueuse/router';
import { AppLogo } from '../../components';
import BackgroundImage from '../../assets/img/bg.jpg';
import IconBack from '~icons/ph/arrow-left';

// Route Stuff
const source = useRouteQuery('source', '');

// UI Stuff

const { auth = {} } = setting('admin') ?? {};
const styles = computed(() => ({
  backgroundImage: `url(${auth.backgroundUrl ?? BackgroundImage})`,
}));
</script>

<style scoped lang="scss">
.auth-wrapper {
  display: flex;
  flex: 1 0 auto;
  .auth-column {
    padding: 0;
    background-color: #ffffff;
    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
      0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%) !important;
    display: flex;
    align-items: center;
  }
  .cursor-pointer {
    cursor: pointer;
  }
}
</style>
