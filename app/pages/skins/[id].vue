<script setup lang="ts">
import { useCartStore } from '~/stores/cart';
import { useUserStore } from '~/stores/user';

const { $skinAPI } = useNuxtApp();
const route = useRoute();
const cartStore = useCartStore();
const userStore = useUserStore();

const skinId = Number(route.params.id);

const { data: skin, error } = await useAsyncData(
  `skin-${skinId}`,
  () => $skinAPI.findSkinById(skinId),
);

const inCart = cartStore.isInCart(skinId);
const owned = computed(() => {
  const user = userStore.loggedUser;
  return user?.ownsSkin?.includes(skinId) ?? false;
});

const addToCart = () => {
  if (skin.value) {
    cartStore.addItem(skin.value);
  }
};
</script>

<template>
  <div class="max-w-2xl mx-auto mt-10 p-6">
    <NuxtLink to="/skins" class="text-green-600 underline">
      {{ $t('skinDetails.backToSkins') }}
    </NuxtLink>

    <div v-if="error || !skin" class="mt-6">
      <p class="text-red-500">{{ $t('skinDetails.notFound') }}</p>
    </div>

    <div v-else class="mt-6">
      <h1 class="text-3xl font-bold">{{ skin.name }}</h1>
      <p class="text-gray-500 mt-1">{{ $t('skins.by') }} {{ skin.author }}</p>

      <div class="mt-6">
        <h2 class="text-xl font-semibold mb-2">{{ $t('skinDetails.description') }}</h2>
        <p>{{ skin.description }}</p>
      </div>

      <div class="mt-6 p-4 border rounded">
        <h2 class="text-xl font-semibold mb-3">{{ $t('skinDetails.stats') }}</h2>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <p class="text-gray-500">{{ $t('skins.price') }}</p>
            <p class="text-lg font-bold">
              {{ skin.price === 0 ? $t('skins.free') : `${skin.price} $` }}
            </p>
          </div>
          <div>
            <p class="text-gray-500">{{ $t('skins.downloads') }}</p>
            <p class="text-lg font-bold">{{ skin.downloads.toLocaleString() }}</p>
          </div>
          <div>
            <p class="text-gray-500">{{ $t('skins.rating') }}</p>
            <p class="text-lg font-bold">{{ skin.rating }} / 5</p>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <BaseButton v-if="owned" variant="secondary" disabled>
          {{ $t('skins.alreadyOwned') }}
        </BaseButton>
        <BaseButton v-else-if="inCart" variant="secondary" disabled>
          {{ $t('skins.alreadyInCart') }}
        </BaseButton>
        <BaseButton v-else variant="primary" @click="addToCart">
          {{ $t('skins.addToCart') }}
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
