<template lang="pug">
.admin-logo-wrapper(:class="`logo-${size}`")
  .admin-logo-icon #[admin-logo]
  .admin-logo-text
    .main-text MRX.CORE
    .slogan just a js framework

</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import AdminLogo from '~icons/ph/fire';
defineProps({
  size: {
    type: String as PropType<'base' | 'small'>,
    default: 'base',
  },
});
</script>

<style scoped lang="scss">
.admin-logo-wrapper {
  display: flex;
  align-items: center;
  .admin-logo-icon {
    display: flex;
    align-items: center;
  }
  .admin-logo-text {
    text-transform: uppercase;
    letter-spacing: 1px;
    .main-text {
      font-weight: 600;
    }
    .slogan {
      font-weight: 400;
    }
  }
  &.logo-base {
    .admin-logo-icon {
      font-size: 3em;
    }
    .admin-logo-text {
      margin-left: 10px;
      .main-text {
        font-size: 1.2em;
        line-height: 1.2em;
      }
      .slogan {
        font-size: 0.8em;
      }
    }
  }
  &.logo-small {
    .admin-logo-icon {
      font-size: 2em;
    }
    .admin-logo-text {
      margin-left: 5px;
      .main-text {
        font-size: 1em;
        line-height: 1em;
      }
      .slogan {
        font-size: 0.7em;
      }
    }
  }
}
</style>
