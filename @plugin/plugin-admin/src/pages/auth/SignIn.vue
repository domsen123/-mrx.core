<template lang="pug">
.d-block
  .text-h6.mb-5 Sign In
  sign-in-form.mb-10
  p.text-center.text-body-1.mb-4 I don't have an account yet! Let me #[router-link(to="/_auth/sign-up") create one]!
  p.text-center.text-body-1 #[router-link(to="/_auth/reset") I forgot my password]!
</template>

<script lang="ts" setup>
import { SignInForm } from '../../forms';
</script>
