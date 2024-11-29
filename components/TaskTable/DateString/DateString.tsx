"use client";

import { Text } from "@mantine/core";
import dayjs from "dayjs";
import { FC } from "react";

interface DateStringProps {
  date: number | Date | undefined
}

export const DateString: FC<DateStringProps> = ({ date }) => {
  return (
    <>
      {dayjs(date).toDate().toLocaleString()}
    </>
  )
}