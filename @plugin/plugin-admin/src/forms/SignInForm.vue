<template lang="pug">
v-form(@submit.prevent="onSignIn" v-model="formIsValid")
  v-text-field(
    label="E-Mail / Username" 
    v-model="form.username"
    :rules="[v => !!v || 'E-Mail or username is required']"
    required
  )
    template(#appendInner) #[icon-user]
  v-text-field(
    label="Password" 
    v-model="form.password" 
    :type="showPassword ? 'text' : 'password'"
    :rules="[v => !!v || 'Password is required']"
    required
  )
    template(#appendInner) #[component(:is="showPassword ? IconEyeOpen : IconEyeClosed" @click="showPassword = !showPassword" class="cursor-pointer")]

  v-btn(color="primary" size="large" block type="submit") SignIn
</template>

<script lang="ts" setup>
import IconUser from '~icons/ph/user';
import IconEyeClosed from '~icons/ph/eye-closed';
import IconEyeOpen from '~icons/ph/eye';

const showPassword = ref<boolean>(false);
const form = reactive({
  username: '',
  password: '',
});
const formIsValid = ref<boolean>(false);

// Methods
const onSignIn = async () => console.warn(`SignIn`, form);
</script>
