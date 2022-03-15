<template lang="pug">
v-app-bar.border-b
  v-spacer
  v-btn(@click="onSignOut") Sign Out
      
</template>

<script lang="ts" setup>
import { useClientAuthService } from '../../../services';

const router = useRouter();
const service = useClientAuthService();

const onSignOut = async () => {
  try {
    await service.SignOut();
    router.replace('/');
  } catch (e) {}
};
</script>
