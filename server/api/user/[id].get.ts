import { userData } from '~/data/userData';

export default defineEventHandler((e) => {
  const id = parseInt(getRouterParam(e, 'id') ?? '', 10);

  const user = userData.find((u) => u.id === id);

  if (!user) {
    throw createError({
      statusCode: 404,
      statusMessage: 'User not found',
    });
  }

  return user;
});
