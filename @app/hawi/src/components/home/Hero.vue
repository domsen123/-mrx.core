<template lang="pug">
.hero-slider
  .slide.slide-1(:style="{backgroundImage: `url(${Slide01})`}")
    v-container
      v-row
        v-col(cols="12" md="10")
          slide(
            page="01" 
            main-text="start up your" 
            accent-text="dream" 
            slug="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          )


</template>

<script lang="ts" setup>
import Slide from './Slide.vue';
import Slide01 from '~/assets/img/slide01-3.jpg';
</script>

<style lang="scss" scoped>
.hero-slider {
  height: calc(100vh + 80px);
  position: relative;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 0;
  }
  .slide {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
