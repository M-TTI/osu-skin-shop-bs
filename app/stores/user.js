import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useUserStore = defineStore('user', () => {
  const loggedUser = ref(null);

  const ownsSkin = (skinId) => {
    if (!loggedUser.value) {
      return false;
    }
    return loggedUser.value.ownsSkin.includes(skinId);
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
