<template lang="pug">
v-app
  v-defaults-provider(:defaults="vuetifyDefaults")
    v-main
      slot
</template>

<script lang="ts" setup>
import { vuetifyDefaults } from '../../defaults';
</script>
