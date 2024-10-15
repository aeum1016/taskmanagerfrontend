import dayjs from 'dayjs';
import { FC } from 'react';
import { Card, Stack } from '@mantine/core';
import { numberToPriority } from '@/enums/Priority/Priority';
import ITask from '@/enums/Task/ITask';
import { TaskListInternal } from './TaskListInternal/TaskListInternal';
import classes from './TaskList.module.css';
import { GetAllTasks } from '@/api/task/routes';

interface TaskListTodayProps { }

export const TaskListToday: FC<TaskListTodayProps> = async ({ }): Promise<JSX.Element> => {

  const todaysTasks: ITask[] = await GetAllTasks();

  todaysTasks.sort((a, b) => {
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
  });

  let hours = 8;

  const filteredTasks = todaysTasks.filter((task) => {
    if (task.estimatehours === undefined && hours >= 1) {
      hours = hours - 1;
      return true;
    } else if (
      task.estimatehours !== undefined &&
      hours >= task.estimatehours
    ) {
      hours = hours - task.estimatehours;
      return true;
    }
    return false;
  });

  return (
    <Card className={classes.card} withBorder>
      <TaskListInternal title={"Today's Itinerary"} tasks={filteredTasks} />
    </Card>
  );
};
