import { cookies } from "next/headers";

export async function getAccessToken() {
  const cookieStore = cookies();

  const url = process.env.BACKEND_URL ? process.env.BACKEND_URL : 'http://127.0.0.1:8080';

  const res = await fetch(url + '/user/token', {
    method: 'GET',
    headers: {
      Cookie: cookieStore.toString(),
    },
    next: { revalidate: 300 },
    credentials: 'include',
  }).catch((error: Error) => {
    console.log(error.name + ' ' + error.message);
    return undefined;
  });
  if (res !== undefined && res.ok) {
    return await res.json();
  }
  return [];
}