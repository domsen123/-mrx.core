<template lang="pug">
v-container
  v-btn(color="primary") Hi
  v-btn(color="primary") Hi
  div
    pre(v-text="props")
</template>

<script lang="ts" setup>
const props = defineProps({
  route: String,
});
</script>
