'use server'

import { cookies } from "next/headers"
import { getAccessToken } from "../user/routes";
import { auth } from "@/auth";

export async function getCalTasks() {
  const cookieStore = cookies();
  const session = await auth();
  if (!session) return;

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
    return await res.json();
  }
  return {}
}