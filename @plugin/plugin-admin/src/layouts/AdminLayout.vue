<template lang="pug">
v-app
  v-defaults-provider(:defaults="vuetifyDefaults")
    v-app-bar(app)
</template>

<script lang="ts" setup>
import { vuetifyDefaults } from '../../defaults';
</script>
