import { handleGoogleSignIn } from '@/auth/handleGoogleSignIn';
import { Button } from '@mantine/core';
import { GoogleIcon } from './GoogleIcon';

const GoogleSignInButton = () => {
  return (
    <form action={handleGoogleSignIn}>
      <Button type={"submit"} leftSection={<GoogleIcon />}>
        Sign In via Google
      </Button>
    </form>
  );
};

export default GoogleSignInButton;
