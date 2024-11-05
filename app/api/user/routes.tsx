'use server';

import {
  parseCookie,
  parseSetCookie,
} from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';
import ILoginPayload from '@/enums/Auth/ILoginPayload';

export async function loginUser(loginPayload: ILoginPayload) {
  const res = await fetch('http://localhost:8080/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(loginPayload),
  })
    .then(async (response) => {
      if (response.status != 200) {
        throw new Error(response.status.toString());
      } else {
        const cookieStore = cookies();
        response.headers.getSetCookie().forEach((cookie) => {
          const parsedCookie = parseSetCookie(cookie);
          if (parsedCookie)
            cookieStore.set(parsedCookie.name, parsedCookie.value, {
              ...parsedCookie,
            });
        });
        return response;
      }
    })
    .catch((error: Error) => {
      return error;
    });
  return Response.json(res).ok;
}
