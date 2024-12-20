import dayjs from "dayjs";
import { TimeIntervals } from "./CalendarTypes";
import { getFreeBusy } from "@/app/api/calendar/routes";

export async function getFreeHoursDirect(start: Date, end: Date, timeZone: string) {
  const busyPeriods = await getFreeBusy(start, end, timeZone);
  return getFreeHours(start, end, busyPeriods);
}

export function getFreeHours(start: Date, end: Date, used: TimeIntervals) {
  let startTime = dayjs(start);

  const freeHours: TimeIntervals = { intervals: [] }
  let minutesFree = 0;

  let usedIndex = 0;

  while (startTime.diff(end) < 0) {
    if (usedIndex < used.intervals.length) {
      if (startTime.add(10, "minute").diff(used.intervals[usedIndex].start) < 0) {
        freeHours.intervals.push({ start: startTime.toDate(), end: dayjs(used.intervals[usedIndex].start).subtract(10, 'minute').toDate() })
        minutesFree = minutesFree - startTime.diff(dayjs(used.intervals[usedIndex].start).subtract(10, 'minute'), "minute");
      }
      startTime = dayjs(used.intervals[usedIndex].end).add(10, "minute")
      usedIndex = usedIndex + 1;
    }
    else {
      if (startTime.add(20, "minute").diff(end) < 0) {
        freeHours.intervals.push({ start: startTime.toDate(), end: dayjs(end).toDate() })
        minutesFree = minutesFree - startTime.diff(dayjs(end), "minute");
        startTime = dayjs(end)
      }
    }
  }

  return { freeHours, minutesFree }
}