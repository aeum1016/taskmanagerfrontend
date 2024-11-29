"use client";

import { getFreeHours } from "@/enums/Calendar/CalendarFuncs";
import { TimeIntervals } from "@/enums/Calendar/CalendarTypes";
import { Text } from "@mantine/core";
import { FC } from "react";

interface IntervalTextProps {
  busyHours: TimeIntervals
}

export const IntervalText: FC<IntervalTextProps> = ({ busyHours }): JSX.Element => {
  const hours = getFreeHours(busyHours);

  return (
    <>
      <Text>{Math.floor(hours.minutesFree / 60)} Hours {hours.minutesFree % 60} Minutes Free</Text>
      <Text>Free Intervals</Text>
      {
        hours.freeHours.intervals.map((interval) =>
          <Text key={interval.start.toLocaleTimeString()}>{interval.start.toLocaleTimeString()} - {interval.end.toLocaleTimeString()}</Text>
        )
      }
    </>
  )
}