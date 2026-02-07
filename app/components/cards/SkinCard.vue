<script setup lang="ts">
const userStore = useUserStore();
const owned = computed(() => userStore.ownsSkin(props.skin?.id));

const props = defineProps<{
  skin: any;
}>();

const emit = defineEmits<{
  'add-to-cart': [skin: any];
  'view-skin': [skinId: number];
}>();

const handleAddToCart = () => {
  emit('add-to-cart', props.skin);
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
      <div v-if="owned">
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
