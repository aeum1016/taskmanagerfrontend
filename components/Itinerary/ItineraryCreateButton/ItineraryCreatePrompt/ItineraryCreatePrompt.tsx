import { FC, useEffect, useState } from "react"
import { Box, Grid, SimpleGrid } from "@mantine/core"
import { getTasks } from "@/app/api/task/routes"
import { getFreeHoursDirect } from "@/enums/Calendar/CalendarFuncs"
import dayjs from "dayjs"
import ITask, { ITaskAsEvent } from "@/enums/Task/ITask"
import { TimeIntervals } from "@/enums/Calendar/CalendarTypes"
import { ItineraryDay } from "../../ItineraryDay/ItineraryDay"
import { TaskTable } from "@/components/TaskTable/TaskTable"
import classes from "./ItineraryCreatePrompt.module.css"
import { Task } from "@/components/Task/Task"
import { getTaskAsEvent } from "@/util/Task/TaskFuncs"

interface ItineraryCreatePromptProps {
  startTime: Date
  endTime: Date
}

export const ItineraryCreatePrompt: FC<ItineraryCreatePromptProps> = ({ startTime, endTime }): JSX.Element => {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [freeTime, setFreeTime] = useState<{ freeHours: TimeIntervals, minutesFree: number }>()
  const [tasksAsEvents, setTasksAsEvents] = useState<ITaskAsEvent[]>([])

  useEffect(() => {
    (async () => {
      const tasks = await getTasks();
      setTasks(tasks)
      const freeTime = await getFreeHoursDirect(startTime, endTime, "America/New_York")
      setFreeTime(freeTime)
    })()
  }, [startTime, endTime])


  return (
    <Box className={classes.box}>
      <SimpleGrid className={classes.tasksBox} cols={3}>
        {tasks.map((task) => {
          return <Task
            task={task}
            buttonPrompt={"hello"}
            onClick={() => {
              setTasks(prev => prev.filter(t => task.id !== t.id))
              const times = getEventTimes(freeTime, task);
              setTasksAsEvents(prev => [...prev, getTaskAsEvent(task, times.start, times.end)])
            }} />
        })}
      </SimpleGrid>
      <Box className={classes.calBox}>
        <ItineraryDay date={dayjs(dayjs(startTime).toDate().toDateString()).toString()} />
      </Box>
    </Box>
  );
}