<template lang="pug">
v-form(@submit.prevent="onSignIn" v-model="formIsValid")
  v-text-field(
    label="E-Mail" 
    v-model="form.mail"
    :rules="[v => !!v || 'E-Mail is required']"
    required
  )
    template(#appendInner) #[icon-user]

  v-btn(color="primary" size="large" block type="submit") Reset my password
</template>

<script lang="ts" setup>
import IconUser from '~icons/ph/user';

const form = reactive({
  mail: '',
});
const formIsValid = ref<boolean>(false);

// Methods
const onSignIn = async () => console.warn(`SignIn`, form);
</script>
