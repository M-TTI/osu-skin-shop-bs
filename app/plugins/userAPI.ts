export default defineNuxtPlugin(() => {
  const userAPI = {
    findAllUsers: async () => {
      return await $fetch(`/api/user/users`, {
        method: 'GET',
      });
    },

    findUserById: async (id: string) => {
      return await $fetch(`/api/user/${id}`, {
        method: 'GET',
      });
    },

    login: async (username: string, password: string) => {
      return await $fetch(`/api/user/login`, {
        method: 'POST',
        body: { username, password },
      });
    },
  };

  return {
    provide: {
      userAPI,
    },
  };
});
