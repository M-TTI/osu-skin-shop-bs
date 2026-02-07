import { skinData } from '~/data/skinData';

export default defineEventHandler((e) => {
  const id = parseInt(getRouterParam(e, 'id') ?? '', 10);

  const skin = skinData.find((s) => s.id === id);

  if (!skin) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Skin not found',
    });
  }

  return skin;
});
