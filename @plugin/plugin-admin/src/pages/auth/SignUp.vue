<template lang="pug">
.d-block
  .text-h6.mb-5 Sign Up
  sign-up-form.mb-10
  p.text-center.text-body-1.mb-4 I already have an account! Let me #[router-link(to="/_auth") sign in]!
</template>

<script lang="ts" setup>
import { SignUpForm } from '../../forms';
</script>
