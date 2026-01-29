<script setup lang="ts">
const userStore = useUserStore();
const ownedSkin = computed(() => userStore.ownsSkin());

const props = defineProps<{
  skin: any;
}>();

const emit = defineEmits<{
  'add-to-cart': [skin: any];
  'view-skin': [skinId: number];
}>();

const handleAddToCart = () => {
  emit('view-skin', props.skin?.id);
};

const handleViewSkin = () => {
  emit('view-skin', props.skin?.id);
}
</script>

<template>
  <div v-if="skin" class="flex flex-col item-start">
    <div class="p4 rounded">
      <h2>{{ skin.name }}</h2>
      <p>{{ skin.description }}</p>
      <div v-if="ownedSkin">
        <BaseButton variant="secondary" disabled>
          {{ $t('skins.alreadyOwned') }}
        </BaseButton>
      </div>
      <div v-else>
        <BaseButton variant="primary" @click="handleAddToCart">
          {{ $t('skins.addToCart') }}
        </BaseButton>
      </div>
      <BaseButton variant="secondary" @click="handleViewSkin">
        {{ $t('skins.viewDetails') }}
      </BaseButton>
    </div>
  </div>
</template>

<style scoped>

</style>
