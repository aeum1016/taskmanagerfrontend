import { FC } from "react"
import { Button, Modal } from "@mantine/core"
import { Dayjs } from "dayjs"
import { useDisclosure } from "@mantine/hooks"
import { ItineraryCreatePrompt } from "./ItineraryCreatePrompt/ItineraryCreatePrompt"
import classes from "./ItineraryCreateButton.module.css"

interface ItineraryCreateButtonProps {
  date: Dayjs
}

export const ItineraryCreateButton: FC<ItineraryCreateButtonProps> = ({ date }): JSX.Element => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal size={"80vw"} opened={opened} onClose={close} title="Create Your Itinerary">
        <ItineraryCreatePrompt startTime={date.toDate()} endTime={date.add(1, 'day').toDate()} />
      </Modal>
      <Button
        className={classes.mainButton} onClick={open}>
        Create Itinerary
      </Button>
    </>
  );
}