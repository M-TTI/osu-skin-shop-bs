export default defineNuxtPlugin(() => {
  const userAPI = {
    findAllUsers: async () => {
      try {
        const data = await $fetch(`api/user/users`, {
          method: 'GET',
        });

        return { data, error: null }
      } catch (error: any) {
        console.error('Error fetching users', error);

        return { data: null, error: error.message };
      }
    },

    findUserById: async (id: string) => {
      try {
        const data = await $fetch(`api/user/${id}`, {
          method: 'GET',
        });

        return { data, error: null }
      } catch (error: any) {
        console.error('Error fetching users', error);

        return { data: null, error: error.message };
      }
    },

    findUserByUsername: async (username: string) => {
      try {
        const data = await $fetch(`api/user/login-${username}`, {
          method: 'GET',
        });

        return { data, error: null }
      } catch (error: any) {
        console.error('Error fetching users', error);

        return { data: null, error: error.message };
      }
    },
  }
});
