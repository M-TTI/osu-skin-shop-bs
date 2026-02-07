<script setup lang="ts">
import { useCartStore } from '~/stores/cart';

const cartStore = useCartStore();
</script>

<template>
  <div class="max-w-2xl mx-auto mt-10 p-6">
    <h1 class="text-2xl font-bold mb-6">{{ $t('cart.title') }}</h1>

    <div v-if="cartStore.totalItems === 0">
      <p class="text-gray-500">{{ $t('cart.empty') }}</p>
      <NuxtLink to="/skins" class="text-green-600 underline mt-4 inline-block">
        {{ $t('cart.continueShopping') }}
      </NuxtLink>
    </div>

    <div v-else>
      <div class="space-y-4">
        <div
          v-for="item in cartStore.items"
          :key="item.id"
          class="flex items-center justify-between p-4 border rounded"
        >
          <div>
            <h2 class="font-semibold">{{ item.name }}</h2>
            <p class="text-sm text-gray-500">{{ $t('skins.by') }} {{ item.author }}</p>
            <p class="text-sm font-bold mt-1">
              {{ item.price === 0 ? $t('skins.free') : `${item.price} $` }}
            </p>
          </div>
          <BaseButton variant="secondary" @click="cartStore.removeItem(item.id)">
            {{ $t('cart.remove') }}
          </BaseButton>
        </div>
      </div>

      <div class="mt-6 p-4 border rounded flex items-center justify-between">
        <p class="text-lg font-bold">{{ $t('cart.total') }}: {{ cartStore.totalPrice.toFixed(2) }} $</p>
        <BaseButton variant="primary" @click="navigateTo('/cart/payment-success')">
          {{ $t('cart.checkout') }}
        </BaseButton>
      </div>

      <div class="mt-4 flex gap-4">
        <NuxtLink to="/skins" class="text-green-600 underline">
          {{ $t('cart.continueShopping') }}
        </NuxtLink>
        <button class="text-red-500 underline" @click="cartStore.clearCart()">
          {{ $t('cart.clearCart') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
