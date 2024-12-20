import { FC } from "react"
import { Button } from "@mantine/core"
import classes from "./ItineraryCreateButton.module.css"
import { Dayjs } from "dayjs"

interface ItineraryCreateButtonProps {
  date: Dayjs
}

export const ItineraryCreateButton: FC<ItineraryCreateButtonProps> = ({ date }): JSX.Element => {
  return (
    <Button
      className={classes.mainButton} onClick={() => {

      }}>
      Create Itinerary
    </Button>
  );
}