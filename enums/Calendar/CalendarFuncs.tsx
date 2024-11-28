import dayjs from "dayjs";
import { TimeIntervals } from "./CalendarTypes";
import { getFreeBusy } from "@/app/api/calendar/routes";

export async function getFreeHoursDirect() {
  const busyPeriods = await getFreeBusy();
  return getFreeHours(busyPeriods);
}

export function getFreeHours(used: TimeIntervals) {
  const today = dayjs(dayjs().toDate().toLocaleDateString());
  let start = today.add(9, "hour");
  const end = today.add(17, "hour");

  const freeHours: TimeIntervals = { intervals: [] }
  let minutesFree = 0;

  let usedIndex = 0;

  while (start.diff(end) < 0) {
    if (usedIndex < used.intervals.length) {
      if (start.add(10, "minute").diff(used.intervals[usedIndex].start) < 0) {
        freeHours.intervals.push({ start: start.toDate(), end: dayjs(used.intervals[usedIndex].start).subtract(10, 'minute').toDate() })
        minutesFree = minutesFree - start.diff(dayjs(used.intervals[usedIndex].start).subtract(10, 'minute'), "minute");
      }
      start = dayjs(used.intervals[usedIndex].end).add(10, "minute")
      usedIndex = usedIndex + 1;
    }
    else {
      if (start.add(20, "minute").diff(end) < 0) {
        freeHours.intervals.push({ start: start.toDate(), end: dayjs(end).toDate() })
        minutesFree = minutesFree - start.diff(dayjs(end), "minute");
        start = dayjs(end)
      }
    }
  }

  return { freeHours, minutesFree }
}