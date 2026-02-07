<script setup lang="ts">
import { useUserStore } from '~/stores/user';

const userStore = useUserStore();
const user = computed(() => userStore.loggedUser);

const handleLogout = () => {
  userStore.logOut();
  navigateTo('/login');
};

onMounted(() => {
  if (!userStore.loggedUser) {
    navigateTo('/login');
  }
});
</script>

<template>
  <div class="max-w-md mx-auto mt-10 p-6">
    <div v-if="user">
      <h1 class="text-2xl font-bold mb-4">{{ $t('account.title') }}</h1>
      <p class="text-lg mb-2">{{ $t('account.welcome', { name: user.username }) }}</p>

      <div class="mt-6 p-4 border rounded">
        <h2 class="font-semibold mb-2">{{ $t('account.profile') }}</h2>
        <p><strong>{{ $t('auth.username') }}:</strong> {{ user.username }}</p>
        <p><strong>Profile Public:</strong> {{ user.isProfilePublic ? $t('common.yes') : $t('common.no') }}</p>
        <p><strong>Owned Skins:</strong> {{ user.ownsSkin?.length ?? 0 }}</p>
      </div>

      <div class="mt-6">
        <BaseButton variant="secondary" @click="handleLogout">
          {{ $t('nav.logout') }}
        </BaseButton>
      </div>
    </div>

    <div v-else>
      <p>{{ $t('common.loading') }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
