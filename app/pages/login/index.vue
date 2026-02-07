<script setup lang="ts">
import { useUserStore } from '~/stores/user';

const { $userAPI } = useNuxtApp();
const userStore = useUserStore();

const error = ref('');
const loading = ref(false);

const handleLogin = async (values: { username: string; password: string }) => {
  error.value = '';
  loading.value = true;

  try {
    const user = await $userAPI.login(values.username, values.password);
    userStore.logIn(user);
    navigateTo('/account');
  } catch (e: any) {
    error.value = e?.statusCode === 401
      ? 'Invalid credentials'
      : 'An error occurred';
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="max-w-md mx-auto mt-10 p-6">
    <h1 class="text-2xl font-bold mb-6">{{ $t('auth.loginTitle') }}</h1>

    <VeeForm @submit="handleLogin" class="space-y-4" v-slot="{ meta }">
      <div>
        <label class="block mb-1">{{ $t('auth.username') }}</label>
        <VeeField
          name="username"
          type="text"
          rules="required"
          class="w-full p-2 border rounded"
        />
        <VeeErrorMessage name="username" class="text-red-500 text-sm" />
      </div>

      <div>
        <label class="block mb-1">{{ $t('auth.password') }}</label>
        <VeeField
          name="password"
          type="password"
          rules="required"
          class="w-full p-2 border rounded"
        />
        <VeeErrorMessage name="password" class="text-red-500 text-sm" />
      </div>

      <p v-if="error" class="text-red-500">{{ error }}</p>

      <BaseButton variant="primary" type="submit" :disabled="loading || !meta.valid">
        {{ loading ? $t('common.loading') : $t('auth.loginButton') }}
      </BaseButton>
    </VeeForm>

    <p class="mt-4">
      {{ $t('auth.noAccount') }}
      <NuxtLink to="/register" class="text-green-600 underline">
        {{ $t('nav.signup') }}
      </NuxtLink>
    </p>
  </div>
</template>

<style scoped>

</style>
