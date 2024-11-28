'use server'

import { cookies } from "next/headers"
import { getAccessToken } from "../user/routes";
import { auth } from "@/auth";
import { CalendarList, GetFreeBusyPayload, GetFreeBusyResponse, TimeIntervals } from "@/enums/Calendar/CalendarTypes";
import dayjs from "dayjs";

export async function getCalendars() {
  const session = await auth();
  if (!session) return [];

  const token = await getAccessToken();

  const res = await fetch("https://www.googleapis.com/calendar/v3/users/me/calendarList", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: "Bearer " + token.auth.String,
    },
  }).catch((error: Error) => {
    console.log(error.name + ' ' + error.message);
    return undefined;
  });
  if (res !== undefined && res.ok) {
    const data: CalendarList = await res.json();
    return data.items;
  }
  return []
}

export async function getFreeBusyInternal(request: GetFreeBusyPayload) {
  const session = await auth();
  if (!session) return

  const token = await getAccessToken();

  const res = await fetch(`https://www.googleapis.com/calendar/v3/freeBusy`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: "Bearer " + token.auth.String,
    },
    body: JSON.stringify(request),
  }).catch((error: Error) => {
    console.log(error.name + ' ' + error.message);
    return undefined;
  });
  if (res !== undefined && res.ok) {
    const data: GetFreeBusyResponse = await res.json();
    return data;
  }
  return
}

export async function getFreeBusy() {
  return await getCalendars().then(async (response) => {
    const calendarIds: { id: string }[] = response.map((calendar) => { return { id: calendar.id } })
    const freeBusy: (GetFreeBusyResponse | undefined) = await getFreeBusyInternal({
      timeMin: dayjs(dayjs().toDate().toDateString()).toDate(),
      timeMax: dayjs(dayjs().add(1, 'day').toDate().toDateString()).toDate(),
      timeZone: "EST",
      items: calendarIds
    })
    if (freeBusy?.calendars !== undefined) {
      let busyPeriods: TimeIntervals = { intervals: [] }
      Object.entries(freeBusy.calendars).forEach((obj) => {
        busyPeriods.intervals.push(...obj[1].busy.map((item) => {
          return { start: item.start, end: item.end }
        }))
      })
      busyPeriods.intervals.sort((a, b) => dayjs(a.start).diff(dayjs(b.start)))
      return busyPeriods
    }
    return { intervals: [] }
  })
}

export async function getCalTasks(calendar: String) {
  const cookieStore = cookies();
  const session = await auth();
  if (!session) return;

  const token = await getAccessToken();

  const res = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${calendar}/events`, {
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