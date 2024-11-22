'use server';

import { auth } from '@/auth';

export const getUserID = async () => {
  const session = await auth();
  if (session && session.user) {
    return session.user.id;
  }
  return '';
};
