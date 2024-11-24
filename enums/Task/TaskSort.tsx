import dayjs from "dayjs";
import { numberToPriority } from "../Priority/Priority";
import ITask from "./ITask";

export function sortingFunction(a: ITask, b: ITask) {
  const aValue =
    a.duedate === undefined
      ? Math.pow(3, numberToPriority(a.priority).value)
      : Math.pow(
        dayjs(a.duedate).diff(dayjs(), 'days'),
        numberToPriority(a.priority).value
      );
  const bValue =
    b.duedate === undefined
      ? Math.pow(3, numberToPriority(b.priority).value)
      : Math.pow(
        dayjs(b.duedate).diff(dayjs(), 'days'),
        numberToPriority(b.priority).value
      );

  return aValue - bValue;
}

export function filterForNextUp(task: ITask, hours: number) {
  if (task.completed) return false;

  if (task.estimatehours === undefined && hours >= 1) {
    hours = hours - 1;
    return true;
  } else if (task.estimatehours !== undefined && hours >= task.estimatehours) {
    hours = hours - task.estimatehours;
    return true;
  }
  return false;
}

export function filterForCompleted(task: ITask, completed: boolean) {
  return completed ? task.completed : !task.completed;
}