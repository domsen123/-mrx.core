<template lang="pug">
component(v-if="layout" :is="layout")
  router-view(v-bind="$attrs")
router-view(v-else v-bind="$attrs")
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
