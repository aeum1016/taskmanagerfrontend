import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function HomePage() {

  const session = await auth()

  if (session) redirect('/manager');
  else redirect('/user/login');
}
