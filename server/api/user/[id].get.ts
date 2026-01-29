import { userData } from '~/data/userData';
import { computed } from 'vue';

export default defineEventHandler((e) => {
  const id = parseInt(getRouterParam(e, 'id') ?? '', 10);

  const user = computed(() => userData.find((user) => user.id === id));

  if (user.value === null) {
    throw createError({
      statusCode: 404,
      statusMessage: 'User not found',
    });
  }

  return user;
});
