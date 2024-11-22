import { handleGoogleSignIn } from '@/auth/handleGoogleSignIn';

const GoogleSignInButton = () => {
  return (
    <form action={handleGoogleSignIn}>
      <button type="submit">Sign in via Google</button>
    </form>
  );
};

export default GoogleSignInButton;
