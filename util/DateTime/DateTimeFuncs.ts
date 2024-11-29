import dayjs from "dayjs";
import utc from "dayjs/plugin/utc"


export function getDayjs() {
  dayjs.extend(utc)

  console.log(dayjs().toDate().toLocaleString())
}