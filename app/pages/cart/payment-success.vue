<script setup lang="ts">
import { useCartStore } from '~/stores/cart';

const cartStore = useCartStore();

onMounted(() => {
  cartStore.clearCart();
});
</script>

<template>
  <div class="max-w-md mx-auto mt-20 p-6 text-center">
    <h1 class="text-3xl font-bold text-green-600 mb-4">{{ $t('payment.successTitle') }}</h1>
    <p class="text-gray-500 mb-6">{{ $t('payment.successMessage') }}</p>

    <div class="flex justify-center gap-4">
      <BaseButton variant="primary" @click="navigateTo('/skins')">
        {{ $t('nav.browseSkins') }}
      </BaseButton>
      <BaseButton variant="secondary" @click="navigateTo('/')">
        {{ $t('nav.home') }}
      </BaseButton>
    </div>
  </div>
</template>

<style scoped>

</style>
