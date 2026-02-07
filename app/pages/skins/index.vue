<script setup lang="ts">
import { useCartStore } from '~/stores/cart';
import SkinCard from "~/components/cards/SkinCard.vue";
const { $skinAPI } = useNuxtApp();
const cartStore = useCartStore();

const addToCart = (skin: any) => {
  cartStore.addItem(skin);
}

const viewSkin = (skinId: number) => {
  navigateTo(`/skins/${skinId}`);
}

const { data: skins, error } = await useAsyncData(
  'skins',
  () => $skinAPI.findAllSkins(),
);

</script>

<template>
  <div>
    <h1>{{ $t('skins.title') }}: {{ skins?.length ?? 0 }}</h1>

    <div v-if="error">
      <p>{{ $t('common.error') }}</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
      <SkinCard
        v-for="skin in skins"
        :key="skin?.id"
        :skin="skin"
        @add-to-cart="addToCart"
        @view-skin="viewSkin"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
