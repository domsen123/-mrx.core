<template lang="pug">
.admin-logo-wrapper
  .admin-logo-icon #[admin-logo]
  .admin-logo-text
    .main-text MRX.CORE
    .slogan just a js framework

</template>

<script lang="ts" setup>
import AdminLogo from '~icons/ph/fire';
</script>

<style scoped lang="scss">
.admin-logo-wrapper {
  display: flex;
  align-items: center;
  .admin-logo-icon {
    display: flex;
    align-items: center;
    font-size: 3em;
  }
  .admin-logo-text {
    margin-left: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    .main-text {
      font-size: 1.2em;
      line-height: 1.2em;
      font-weight: 600;
    }
    .slogan {
      font-weight: 400;
      font-size: 0.8em;
    }
  }
}
</style>
