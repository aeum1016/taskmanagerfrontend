import { FC } from "react"
import { Card, Spoiler, Text } from "@mantine/core"
import classes from "./ItineraryItem.module.css"
import dayjs from "dayjs"
import { EventPayload } from "@/enums/Calendar/CalendarTypes"
import { getPercentageOfDay } from "@/util/DateTime/DateTimeFuncs"
import { ITaskAsEvent } from "@/enums/Task/ITask"

interface ItineraryItemProps {
  isEvent: boolean,
  event: EventPayload | ITaskAsEvent,
}

export const ItineraryItem: FC<ItineraryItemProps> = ({ isEvent, event }): JSX.Element => {
  return (
    <Card
      className={classes.card}
      top={getPercentageOfDay(dayjs(event.start.dateTime).toDate().toDateString(), event.start.dateTime) + "%"}
      h={getPercentageOfDay(event.start.dateTime, event.end.dateTime) + "%"}
    >
      <Text className={classes.text}>{dayjs(event.start.dateTime).format("HH:mm")}-{dayjs(event.end.dateTime).format("HH:mm")}</Text>
      <Text className={classes.title}>{event.summary}</Text>
      <Spoiler
        maxHeight={0}
        showLabel={<Text className={classes.text}>show description</Text>}
        hideLabel={<Text className={classes.text}>hide description</Text>}
      >
        <Text className={classes.text}>{event.description}</Text>
      </Spoiler>
    </Card>
  )
}