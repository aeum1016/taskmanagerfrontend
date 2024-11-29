import { FC } from 'react';
import { Stack, Text } from '@mantine/core';
import { getTasks } from '@/app/api/task/routes';
import ITask from '@/enums/Task/ITask';
import { TaskListInternal } from './ItineraryInternal/ItineraryInternal';
import classes from './Itinerary.module.css';
import { filterForCompleted, filterForNextUp, sortingFunction } from '@/enums/Task/TaskSort';
import { getFreeHoursDirect } from '@/enums/Calendar/CalendarFuncs';
import { IntervalText } from './IntervalText/IntervalText';

export const Itinerary: FC = async ({ }): Promise<JSX.Element> => {
  const todaysTasks: ITask[] = await getTasks();

  todaysTasks.sort(sortingFunction);

  const hours = await getFreeHoursDirect();

  const left = { left: (hours.minutesFree / 60) }

  const filteredTasks = todaysTasks.filter((task) =>
    filterForNextUp(task, left)
  );

  const completedTasks = todaysTasks.filter((task) => filterForCompleted(task, true));

  return (
    <Stack className={classes.card}>
      <IntervalText hours={hours} />
      <TaskListInternal title={"Today's Itinerary"} tasks={filteredTasks} />
      <TaskListInternal title={'Completed Tasks'} tasks={completedTasks} />
    </Stack>
  );
};
