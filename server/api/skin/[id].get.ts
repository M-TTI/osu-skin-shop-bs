import { skinData } from '~/data/skinData';
import { computed } from 'vue';

export default defineEventHandler((e) => {
  const id = parseInt(getRouterParam(e, 'id') ?? '', 10);

  const skin = computed(() => skinData.find((skin) => skin.id === id));

  if (skin.value === null) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Skin not found',
    });
  }

  return skin;
});
