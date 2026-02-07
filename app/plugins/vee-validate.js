import { required, min, confirmed } from '@vee-validate/rules';
import { defineRule, Form, Field, FieldArray, ErrorMessage } from 'vee-validate';

defineRule('required', required);
defineRule('min', min);
defineRule('confirmed', confirmed);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VeeForm', Form);
  nuxtApp.vueApp.component('VeeField', Field);
  nuxtApp.vueApp.component('VeeFieldArray', FieldArray);
  nuxtApp.vueApp.component('VeeErrorMessage', ErrorMessage);
});
