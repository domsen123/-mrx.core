<template lang="pug">
v-form(@submit.prevent="onSignUp" v-model="formIsValid")
  v-row(dense)
    v-col(cols="6")
      v-text-field(
        label="Firstname" 
        v-model="form.firstname"
        :rules="[v => !!v || 'Firstname is required']"
        required
      )
    v-col(cols="6")
      v-text-field(
        label="Lastname" 
        v-model="form.lastname"
        :rules="[v => !!v || 'Lastname is required']"
        required
      )

  v-text-field(
    label="E-Mail" 
    v-model="form.username"
    :rules="[v => !!v || 'E-Mail is required']"
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
  
  v-slide-y-transition
    v-text-field(
      v-if="!showPassword"
      label="Confirm Password" 
      v-model="form.confirm" 
      type="password"
      :rules="[v => !showPassword ? !!v || 'Confirm is requird' : true, v => !showPassword ? v === form.password || 'Passwords does not match' : true ]"
    )  

  v-btn(color="primary" size="large" block type="submit") SignUp
</template>

<script lang="ts" setup>
import type { SignUpDto } from '@mrx/plugin-admin/contracts';
import { getLogger, redirect } from '@mrx/helper';
import { useClientAuthService } from '../../services';
import IconUser from '~icons/ph/user';
import IconEyeClosed from '~icons/ph/eye-closed';
import IconEyeOpen from '~icons/ph/eye';

const router = useRouter();
const service = useClientAuthService();

const showPassword = ref<boolean>(false);
const form = reactive<SignUpDto>({
  firstname: 'Dominic',
  lastname: 'Marx',
  username: 'dmarx@marxulm.de',
  password: 'lala4712',
  confirm: 'lala4712',
});
const formIsValid = ref<boolean>(false);

// Methods
const onSignUp = async () => {
  try {
    await service.SignUp(form);
    await redirect('/', router);
    getLogger().info('Success');
  } catch (e: any) {
    getLogger().error(e);
  }
};
</script>
