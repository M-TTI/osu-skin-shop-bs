import { userData } from '~/data/userData';

export default defineEventHandler((e) => {
  const username = getRouterParam(e, 'username');

  const user = computed(() => userData.find((user) => user.username === username));

  if (user.value === null) {
    throw createError({
      statusCode: 404,
      statusMessage: 'User not found',
    });
  }

  return user;
});
