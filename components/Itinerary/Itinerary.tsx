import { FC } from 'react';
import { Stack } from '@mantine/core';
import { getTasks } from '@/app/api/task/routes';
import ITask from '@/enums/Task/ITask';
import { TaskListInternal } from './ItineraryInternal/ItineraryInternal';
import classes from './Itinerary.module.css';
import { filterForCompleted, filterForNextUp, sortingFunction } from '@/enums/Task/TaskSort';

export const Itinerary: FC = async ({ }): Promise<JSX.Element> => {
  const todaysTasks: ITask[] = await getTasks();

  todaysTasks.sort(sortingFunction);

  const hours = {
    left: process.env.ITINERARY_HOURS
      ? parseInt(process.env.ITINERARY_HOURS)
      : 8
  }

  const filteredTasks = todaysTasks.filter((task) =>
    filterForNextUp(task, hours)
  );

  const completedTasks = todaysTasks.filter((task) => filterForCompleted(task, true));

  return (
    <Stack className={classes.card}>
      <TaskListInternal title={"Today's Itinerary"} tasks={filteredTasks} />
      <TaskListInternal title={'Completed Tasks'} tasks={completedTasks} />
    </Stack>
  );
};
