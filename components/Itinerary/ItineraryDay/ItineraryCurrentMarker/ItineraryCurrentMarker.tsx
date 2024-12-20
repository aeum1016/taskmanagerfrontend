import { FC } from "react"
import { Box } from "@mantine/core";
import classes from './ItineraryCurrentMarker.module.css'
import { getPercentageOfDay, getToday } from "@/util/DateTime/DateTimeFuncs";
import dayjs from "dayjs";

interface ItineraryCurrentMarkerProps {
  date: string
}

export const ItineraryCurrentMarker: FC<ItineraryCurrentMarkerProps> = ({ date }) => {
  if (getToday().toDateString() !== date) return <></>;

  return (
    <Box className={classes.box} top={getPercentageOfDay(getToday().toDateString(), dayjs().toString()) + "%"}>
      Now
    </Box>
  )
}