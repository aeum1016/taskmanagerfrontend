import { TimeIntervals } from "@/enums/Calendar/CalendarTypes";
import ITask, { ITaskAsEvent } from "@/enums/Task/ITask";

export function getTaskAsEvent(task: ITask, startTime: Date, endTime: Date) {
  const taskAsEvent: ITaskAsEvent = {
    id: task.id,
    summary: task.title,
    description: task.description ? task.description : "",
    start: {
      dateTime: startTime.toISOString(),
    },
    end: {
      dateTime: endTime.toISOString(),
    }
  }
  return taskAsEvent
}

export function getEventTimes(freeTimes: TimeIntervals, task: ITask) {

} 