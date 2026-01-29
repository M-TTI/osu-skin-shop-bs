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
    <h1>{{ $t('skins.title') }}: {{ skin?.length ?? 0 }}</h1>

    <div v-if="error">
      <p>{{ $t('common.error') }}</p>
    </div>

    <div>
      <div class="flex space-x-4 space-y-2"  v-for="skin in skins" :key="skin?.id">
        <SkinCard
          :skin="skin"
          @add-to-cart="addToCart"
          @view-skin="viewSkin"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
