import {id} from "@nuxt/ui/locale";

export default defineNuxtPlugin(() => {
  const skinAPI = {
    findAllSkins: async () => {
      try {
        const data = await $fetch(`/api/skin/skins`, {
          method: 'GET',
        });

        console.log(data);
        return { data, error: null }
      } catch (error: any) {
        console.error('Error fetching skin:', error);

        return { data: null, error: error.message };
      }
    },

    findSkinById: async (id: number) => {
      try {
        const data = await $fetch(`/api/skin/${id}`, {
          method: 'GET',
        });

        return { data, error: null }
      } catch (error: any) {
        console.error('Error fetching skin:', error);

        return { data: null, error: error.message };
      }
    },
  }

  return {
    provide: {
      skinAPI,
    }
  }
});
