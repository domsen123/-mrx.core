<template lang="pug">
v-container.slide-wrapper
  .hero-big
    .hero-page(v-text="page")
    .hero-divider.bg-primary
    .hero-text
      span.font-weight-medium(v-text="mainText")
      span.text-primary.font-weight-bold(v-text="accentText")
  v-row.hero-subtitle
    v-col(cols="8")
      span(v-text="slug")
  v-row.hero-buttons(justify="start")
    v-col(cols="auto")
      v-btn(color="primary" size="large" rounded="pill") Start Now
    v-col(cols="auto")
      v-btn(variant="outlined" size="large" rounded="pill") Learn More
</template>

<script lang="ts" setup>
defineProps({
  page: String,
  mainText: String,
  accentText: String,
  slug: String,
});
</script>

<style lang="scss" scoped>
.slide-wrapper {
  color: #ffffff;
  position: relative;
  .hero-big {
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 2em;
    .hero-page {
      font-size: 11em;
      line-height: 0.9em;
      font-weight: 600;
      opacity: 0.1;
      margin-right: 0.1em;
    }
    .hero-divider {
      width: 3px;
      display: flex;
      align-self: stretch;
      margin-right: 2em;
    }
    .hero-text {
      letter-spacing: 3px;
      display: flex;
      flex-direction: column;
      line-height: 1em;
      font-size: 5em;
      text-transform: capitalize;
    }
  }
  .hero-subtitle {
    font-size: 1em;
    line-height: 1.4em;
    font-weight: 500;
    margin-bottom: 1.5em;
    color: rgba(255, 255, 255, 1);
  }
}
</style>
