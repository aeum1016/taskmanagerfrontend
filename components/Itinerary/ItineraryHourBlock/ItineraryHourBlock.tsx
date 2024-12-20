import { FC } from "react"
import { Box, Text } from "@mantine/core"
import classes from "./ItineraryHourBlock.module.css"

interface ItineraryHourBlockProps {
  hour: number
}

export const ItineraryHourBlock: FC<ItineraryHourBlockProps> = ({ hour }): JSX.Element => {
  return <Box className={classes.box} top={(hour / 24 * 100) + "%"} h={1 / 24 * 100 + "%"}>
    <Text className={classes.time}>{hour}</Text>
  </Box>
}