import dayjs from "dayjs";

export function getPercentageOfDay(dateTime: string, endDateTime: string) {
  return (dayjs(endDateTime).diff(dayjs(dateTime), "minutes") / (24 * 60)) * 100;
}

export function getToday() {
  return dayjs(dayjs().toDate().toDateString()).toDate();
}