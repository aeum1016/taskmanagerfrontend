'use server'

import { cookies } from "next/headers"
import { getAccessToken } from "../user/routes";

export async function getCalTasks() {
  const cookieStore = cookies();

  const token = await getAccessToken();

  const res = await fetch('https://www.googleapis.com/calendar/v3/calendars/aeum1016@gmail.com/events', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Cookie: cookieStore.toString(),
      Authorization: "Bearer " + token.auth.String,
    },
  }).catch((error: Error) => {
    console.log(error.name + ' ' + error.message);
    return undefined;
  });
  if (res !== undefined && res.ok) {
    console.log(res);
    return await res.json();
  }
  return {}
}