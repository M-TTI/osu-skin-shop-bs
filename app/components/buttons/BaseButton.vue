<template>
  <button :class="buttonClasses">
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  variant: { type: String, default: 'primary' },
  disabled: { type: Boolean, default: false }
})

const buttonClasses = computed(() => ({
  'px-4 py-2 rounded font-semibold text-white': true,
  'bg-pink-500 hover:bg-pink-600': props.variant === 'primary',
  'bg-gray-100/5 hover:bg-gray-100/10': props.variant === 'secondary',
  'disabled': props.disabled,
}));

</script>

<style scoped>

</style>
