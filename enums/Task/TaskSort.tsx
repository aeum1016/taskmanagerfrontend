import dayjs from "dayjs";
import { numberToPriority } from "../Priority/Priority";
import ITask from "./ITask";

export function sortingFunction(a: ITask, b: ITask) {
  const aValue =
    a.duedate === undefined
      ? Math.pow(24, numberToPriority(a.priority).value)
      : Math.pow(
        Math.max(0, dayjs(a.duedate).diff(dayjs(), 'hours')),
        numberToPriority(a.priority).value
      );
  const bValue =
    b.duedate === undefined
      ? Math.pow(24, numberToPriority(b.priority).value)
      : Math.pow(
        Math.max(0, dayjs(b.duedate).diff(dayjs(), 'hours')),
        numberToPriority(b.priority).value
      );

  return aValue - bValue;
}

export function filterForNextUp(task: ITask, hours: { left: number }) {
  if (task.completed) return false;

  if (task.estimatehours === undefined && hours.left >= 1) {
    hours.left = hours.left - 1;
    return true;
  } else if (task.estimatehours !== undefined && hours.left > 0) {
    hours.left = hours.left - task.estimatehours;
    return true;
  }
  return false;
}

export function filterForCompleted(task: ITask, completed: boolean) {
  return completed ? task.completed : !task.completed;
}