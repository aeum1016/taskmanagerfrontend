import { handleSignOut } from '@/auth/handleSignOut';

const SignOutButton = () => {
  return (
    <form action={handleSignOut}>
      <button type="submit">Sign out</button>
    </form>
  );
};

export default SignOutButton;
