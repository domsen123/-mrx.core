<template lang="pug">
component(v-if="layout" :is="layout")
  router-view
router-view(v-else)
</template>

<script lang="ts" setup>
import type { Component } from 'vue';

const route = useRoute();
const layout = computed<Component | false>(() =>
  route.meta && route.meta.layout
    ? defineAsyncComponent(() => route.meta.layout!())
    : false,
);
</script>
