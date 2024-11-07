import { signIn } from '@/auth';

const GoogleSignInButton = () => {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('google', { redirectTo: '/manager' });
      }}
    >
      <button type="submit">Sign in via Google</button>
    </form>
  );
};

export default GoogleSignInButton;
