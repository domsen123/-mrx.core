<template lang="pug">
v-app
  v-defaults-provider(:defaults="vuetifyDefaults")
    admin-nav-drawer
    admin-app-bar
    v-main
      slot
</template>

<script lang="ts" setup>
import { AdminAppBar, AdminNavDrawer } from '../components/core';
import { vuetifyDefaults } from '../../defaults';
onMounted(() => {
  document.body.classList.add('app');
});
</script>
