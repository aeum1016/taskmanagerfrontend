import { FC, useEffect, useState } from "react"
import classes from "./ItineraryDay.module.css"
import { EventPayload } from "@/enums/Calendar/CalendarTypes"
import { Card } from "@mantine/core"
import { ItineraryHourBlock } from "../ItineraryHourBlock/ItineraryHourBlock"
import { ItineraryItem } from "../ItineraryItem/ItineraryItem"
import { ItineraryCurrentMarker } from "./ItineraryCurrentMarker/ItineraryCurrentMarker"
import { getAllCalTasks } from "@/app/api/calendar/routes"
import { ITaskAsEvent } from "@/enums/Task/ITask"
import dayjs from "dayjs"

interface ItineraryDayProps {
  date: string
  tempTasks?: ITaskAsEvent[]
}

export const ItineraryDay: FC<ItineraryDayProps> = ({ date, tempTasks }) => {

  const [todaysEvents, setTodaysEvents] = useState<EventPayload[]>([]);

  useEffect(() => {
    (async () => {
      const todays = await getAllCalTasks(dayjs(date).toDate(), dayjs(date).add(1, 'day').toDate());
      setTodaysEvents(todays)
    })()
  }, [date])

  const hours: number[] = [];
  for (let i = 0; i < 24; i++) hours.push(i);

  return (
    <Card className={classes.card}>
      {
        hours.map((hour) => {
          return <ItineraryHourBlock key={"hour" + hour} hour={hour} />
        })
      }
      {todaysEvents.map((event) => {
        return <ItineraryItem key={event.id} isEvent={true} event={event} />
      })}

      {tempTasks !== undefined ? tempTasks.map((task) => {
        return <ItineraryItem key={task.id} isEvent={false} event={task} />
      }) : <></>}
      <ItineraryCurrentMarker date={date} />
    </Card>
  );
}