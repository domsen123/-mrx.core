<template lang="pug">
v-navigation-drawer
  v-toolbar(height="64") #[AppLogo(size="small")]
  v-list
    v-list-item(to="/_admin")
      v-list-item-avatar.d-flex.align-center(left) #[icon-dashboard]
      v-list-item-title Dashboard
</template>

<script lang="ts" setup>
import AppLogo from '../LogoWrapper.vue';
import IconDashboard from '~icons/ph/circles-three-plus';
defineComponent({ name: 'AdminNavDrawer' });
</script>

<style lang="scss" scoped></style>
