'use server';

import { signIn } from '@/auth';

export const handleGoogleSignIn = async () => {
  try {
    await signIn('google', { redirectTo: '/manager' });
  } catch (error) {
    throw error;
  }
};
