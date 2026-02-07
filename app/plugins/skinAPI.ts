export default defineNuxtPlugin(() => {
  const skinAPI = {
    findAllSkins: async () => {
      return await $fetch(`/api/skin/skins`, {
        method: 'GET',
      });
    },

    findSkinById: async (id: number) => {
      return await $fetch(`/api/skin/${id}`, {
        method: 'GET',
      });
    },
  }

  return {
    provide: {
      skinAPI,
    }
  }
});
