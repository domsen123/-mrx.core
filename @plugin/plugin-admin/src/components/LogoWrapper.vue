<template lang="pug">
component(:is="logo" v-if="logo")
</template>

<script lang="ts" setup>
import { setting } from '@mrx/helper';
import type { Component } from 'vue';
import { defineAsyncComponent } from 'vue';
const logo = computed<Component>(() => {
  const logo = setting('logo');
  return defineAsyncComponent(() => (logo ? logo() : import('./Logo.vue')));
});
</script>
