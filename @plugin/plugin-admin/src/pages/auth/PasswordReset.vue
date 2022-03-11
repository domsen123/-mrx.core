<template lang="pug">
.d-block
  .text-h6.mb-5 Reset password
  reset-password-form.mb-10
  p.text-center.text-body-1.mb-4 Oh I do remember! Let me #[router-link(to="/_auth") sign in]!
</template>

<script lang="ts" setup>
import { ResetPasswordForm } from '../../forms';
</script>
