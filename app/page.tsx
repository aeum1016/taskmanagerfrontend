import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function HomePage() {
  // if logged in user, go to manager page
  // else go to login page
  const user_jwt = cookies().get('jwt');

  // perform validation logic
  const validUser = true;

  if (validUser) redirect('/manager');
  else redirect('/login');
}
