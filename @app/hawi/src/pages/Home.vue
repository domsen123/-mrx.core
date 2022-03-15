<template lang="pug">
.page-home
  hero
  v-theme-provider(theme="light" with-background)
    .hawi-divider
    v-container.pb-20
      h1.section-title
        span.text-primary How
        span we Work
      v-row.mb-2em(justify="space-between")
        v-col.d-flex.flex-column.justify-center(cols="3")
          .media-container
            img.mx-auto.rounded-full(src="http://webdesign-finder.com/techup/wp-content/uploads/2019/06/step01-400x400.jpg" width="140" height="140")
          h2.text-h4.text-center.font-weight-medium Planung
        v-col.d-flex.flex-column.justify-center(cols="3")
          .media-container.arrow
            img.mx-auto.rounded-full(src="http://webdesign-finder.com/techup/wp-content/uploads/2019/05/blog02-400x400.jpg" width="170" height="170")
          h2.text-h4.text-center.font-weight-medium Design
        v-col.d-flex.flex-column.justify-center(cols="3")
          .media-container.arrow.flip
            img.mx-auto.rounded-full(src="http://webdesign-finder.com/techup/wp-content/uploads/2019/06/step03-400x400.jpg" width="200" height="200")
          h2.text-h4.text-center.font-weight-medium Programmierung
  v-theme-provider(theme="dark" with-background)
    v-container.py-20
      v-row.mb-2em
        v-col(cols="4")
          .d-flex.pa-3
            icon-activity.text-h2.text-primary
            .d-block.ml-5.pt-5
              .text-h6.mb-1 Lorem Ipsum
              p.body-2 Tincidunt felis dignissim justo congue, non rutrum tortor volutpat.
        v-col(cols="4")
          .d-flex.pa-3
            icon-activity.text-h2.text-primary
            .d-block.ml-5.pt-5
              .text-h6.mb-1 Lorem Ipsum
              p.body-2 Tincidunt felis dignissim justo congue, non rutrum tortor volutpat.
        v-col(cols="4")
          .d-flex.pa-3
            icon-activity.text-h2.text-primary
            .d-block.ml-5.pt-5
              .text-h6.mb-1 Lorem Ipsum
              p.body-2 Tincidunt felis dignissim justo congue, non rutrum tortor volutpat.
      v-row
        v-col(cols="4")
          .d-flex.pa-3
            icon-activity.text-h2.text-primary
            .d-block.ml-5.pt-5
              .text-h6.mb-1 Lorem Ipsum
              p.body-2 Tincidunt felis dignissim justo congue, non rutrum tortor volutpat.
        v-col(cols="4")
          .d-flex.pa-3
            icon-activity.text-h2.text-primary
            .d-block.ml-5.pt-5
              .text-h6.mb-1 Lorem Ipsum
              p.body-2 Tincidunt felis dignissim justo congue, non rutrum tortor volutpat.
        v-col(cols="4")
          .d-flex.pa-3
            icon-activity.text-h2.text-primary
            .d-block.ml-5.pt-5
              .text-h6.mb-1 Lorem Ipsum
              p.body-2 Tincidunt felis dignissim justo congue, non rutrum tortor volutpat.
  v-theme-provider(theme="light" with-background)
    v-container.py-20
      h1.section-title
        span.text-primary Unser
        span Team

      v-row
        v-col(cols="3")
          v-img(src="http://webdesign-finder.com/techup/wp-content/uploads/2019/05/team01-800x995.jpg")
          .d-block.mt-3.text-center
            h3.text-h5 Christian Hauck
            .body-1 CEO

        v-col(cols="3")
          v-img(src="http://webdesign-finder.com/techup/wp-content/uploads/2019/05/team03-800x995.jpg")
          .d-block.mt-3.text-center
            h3.text-h5 Molynn Hauck
            .body-1 Assistant
        v-col(cols="3")
          v-img(src="http://webdesign-finder.com/techup/wp-content/uploads/2019/05/team02-800x995.jpg")
          .d-block.mt-3.text-center
            h3.text-h5 Sandra Willhelm
            .body-1 Assistant
        v-col(cols="3")
          v-img(src="http://webdesign-finder.com/techup/wp-content/uploads/2019/05/team01-800x995.jpg")
          .d-block.mt-3.text-center
            h3.text-h5 Steffen Willhelm
            .body-1 CEO
</template>

<script lang="ts" setup>
import { Hero } from '~/components/home';
import IconActivity from '~icons/ph/activity';
</script>

<style lang="scss">
.hawi-divider {
  background-color: #fff;
  height: 80px;
  transform: skewY(-2deg) translateY(-40px);
}
.media-container {
  height: 200px;
  display: flex;
  align-items: center;
  justify-items: center;
  margin-bottom: 2em;
  position: relative;
  &.arrow::after {
    position: absolute;
    content: '';
    width: 156px;
    height: 26px;
    background-image: url('~/assets/img/step_arrow_1.png');
    left: -60%;
  }
  &.arrow.flip::after {
    transform: scaleY(-1);
  }
}
</style>
