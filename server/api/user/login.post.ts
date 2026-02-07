import { userData } from '~/data/userData';

export default defineEventHandler(async (e) => {
  const { username, password } = await readBody(e);

  if (!username || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Username and password are required',
    });
  }

  const user = userData.find(
    (u) => u.username === username && String(u.password) === String(password),
  );

  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid credentials',
    });
  }

  return user;
});
