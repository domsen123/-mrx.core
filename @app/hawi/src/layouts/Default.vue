<template lang="pug">
v-app
  v-app-bar(density="prominent" theme="dark")
    v-layout.flex-column(full-height)
      v-layout.border-b
        v-container.d-flex.py-1
          .d-flex.align-center
            v-btn(href="tel:+49 173 6833931" size="small")
              icon-phone.mr-2
              span +49 173 6833931
            //- a.text-decoration-none.ml-2
          v-spacer
          v-row(justify="end" align="center" dense)
            v-col(cols="auto")
              v-btn(href="http://facebook.com" icon size="x-small") #[icon-facebook]
            v-col(cols="auto")
              v-btn(href="http://linkedin.com" icon size="x-small") #[icon-linked-in]
      v-layout.flex-grow-1.align-center
        v-container.d-flex.align-center
          .text-h4.d-flex
            span.font-weight-bold.mr-2.text-primary HAWI
            span.font-weight-light ITSolutions
          v-spacer
          v-btn Home
          v-btn Services
          v-btn Portfolio
          v-btn Kontakt
          v-btn Impressum
      
  //- v-main
  router-view
</template>

<script lang="ts" setup>
import IconPhone from '~icons/ph/phone';
import IconFacebook from '~icons/ph/facebook-logo';
import IconLinkedIn from '~icons/ph/linkedin-logo';
</script>
