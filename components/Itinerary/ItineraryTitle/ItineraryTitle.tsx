import { FC } from "react"
import { Title } from "@mantine/core"
import { Dayjs } from "dayjs"
import classes from "./ItineraryTitle.module.css"

interface ItineraryTitleProps {
  date: Dayjs
}

export const ItineraryTitle: FC<ItineraryTitleProps> = ({ date }): JSX.Element => {
  return <Title className={classes.title}> {date.format("MM/DD")} </Title>
}