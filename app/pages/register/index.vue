<script setup lang="ts">
const registered = ref(false);
const registeredUsername = ref('');

interface RegisterForm {
  username: string;
  password: string;
  confirmPassword: string;
}

const handleRegister = (values: RegisterForm) => {
  registeredUsername.value = values.username;
  registered.value = true;
};
</script>

<template>
  <div class="max-w-md mx-auto mt-10 p-6">
    <div v-if="registered" class="text-center">
      <h1 class="text-2xl font-bold mb-4">{{ $t('auth.signupSuccess') }}</h1>
      <p class="text-lg mb-6">You registered with "{{ registeredUsername }}"</p>
      <NuxtLink to="/login">
        <BaseButton variant="primary">
          {{ $t('auth.loginButton') }}
        </BaseButton>
      </NuxtLink>
    </div>

    <div v-else>
      <h1 class="text-2xl font-bold mb-6">{{ $t('auth.signupTitle') }}</h1>

      <VeeForm @submit="handleRegister" class="space-y-4" v-slot="{ meta }">
        <div>
          <label class="block mb-1">{{ $t('auth.username') }}</label>
          <VeeField
            name="username"
            type="text"
            rules="required|min:3"
            class="w-full p-2 border rounded"
          />
          <VeeErrorMessage name="username" class="text-red-500 text-sm" />
        </div>

        <div>
          <label class="block mb-1">{{ $t('auth.password') }}</label>
          <VeeField
            name="password"
            type="password"
            rules="required|min:6"
            class="w-full p-2 border rounded"
          />
          <VeeErrorMessage name="password" class="text-red-500 text-sm" />
        </div>

        <div>
          <label class="block mb-1">{{ $t('auth.confirmPassword') }}</label>
          <VeeField
            name="confirmPassword"
            type="password"
            rules="required|confirmed:@password"
            class="w-full p-2 border rounded"
          />
          <VeeErrorMessage name="confirmPassword" class="text-red-500 text-sm" />
        </div>

        <BaseButton variant="primary" type="submit" :disabled="!meta.valid">
          {{ $t('auth.signupButton') }}
        </BaseButton>
      </VeeForm>

      <p class="mt-4">
        {{ $t('auth.hasAccount') }}
        <NuxtLink to="/login" class="text-green-600 underline">
          {{ $t('nav.login') }}
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>
