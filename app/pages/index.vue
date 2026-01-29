<script setup>
const router = useRouter()

const goToShop = () => {
  router.push('/skins')
}
</script>

<template>
  <div>
    <BaseButton variant="secondary" @click="goToShop">
      {{ $t('nav.browseSkins') }}
    </BaseButton>
  </div>
</template>
