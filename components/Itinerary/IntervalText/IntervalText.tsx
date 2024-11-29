"use client";

import { TimeIntervals } from "@/enums/Calendar/CalendarTypes";
import { Text } from "@mantine/core";
import { FC } from "react";

interface IntervalTextProps {
  hours: {
    freeHours: TimeIntervals,
    minutesFree: number,
  }
}

export const IntervalText: FC<IntervalTextProps> = ({ hours }): JSX.Element => {
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