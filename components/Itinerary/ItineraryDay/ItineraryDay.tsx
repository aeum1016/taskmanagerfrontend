import { FC } from "react"
import classes from "./ItineraryDay.module.css"
import { EventPayload } from "@/enums/Calendar/CalendarTypes"
import { Card } from "@mantine/core"
import { ItineraryHourBlock } from "../ItineraryHourBlock/ItineraryHourBlock"
import { ItineraryItem } from "../ItineraryItem/ItineraryItem"
import { ItineraryCurrentMarker } from "./ItineraryCurrentMarker/ItineraryCurrentMarker"
import { getToday } from "@/util/DateTime/DateTimeFuncs"

interface ItineraryDayProps {
  events: EventPayload[]
  date: string
}

export const ItineraryDay: FC<ItineraryDayProps> = ({ events, date }) => {

  const hours: number[] = [];
  for (let i = 0; i < 24; i++) hours.push(i);

  return (
    <Card className={classes.card}>
      {
        hours.map((hour) => {
          return <ItineraryHourBlock key={"hour" + hour} hour={hour} />
        })
      }
      {events.map((event) => {
        return <ItineraryItem key={event.id} isEvent={true} event={event} />
      })}
      <ItineraryCurrentMarker date={date} />
    </Card>
  );
}