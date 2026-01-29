import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useUserStore = defineStore('user', () => {
  const loggedUser = ref(null);

  const ownsSkin = (skin) => {
    if (loggedUser == null) {
      return null;
    }

    return computed(() => {
      return loggedUser.ownsSkin.includes(skin.id);
    });
  }

  const logIn = (user) => {
    loggedUser.value = user;
  }

  const logOut = () => {
    loggedUser.value = null;
  }

  return {
    loggedUser,
    ownsSkin,
    logIn,
    logOut,
  }
});
