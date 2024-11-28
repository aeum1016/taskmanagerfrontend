import { FC } from 'react';
import { Stack, Text } from '@mantine/core';
import { getTasks } from '@/app/api/task/routes';
import ITask from '@/enums/Task/ITask';
import { TaskListInternal } from './ItineraryInternal/ItineraryInternal';
import classes from './Itinerary.module.css';
import { filterForCompleted, filterForNextUp, sortingFunction } from '@/enums/Task/TaskSort';
import { getFreeHoursDirect } from '@/enums/Calendar/CalendarFuncs';

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
      <Text>{Math.floor(hours.minutesFree / 60)} Hours {hours.minutesFree % 60} Minutes Free</Text>
      <Text>Free Intervals</Text>
      {
        hours.freeHours.intervals.map((interval) =>
          <Text key={interval.start.toLocaleTimeString()}>{interval.start.toLocaleTimeString()} - {interval.end.toLocaleTimeString()}</Text>
        )
      }
      <TaskListInternal title={"Today's Itinerary"} tasks={filteredTasks} />
      <TaskListInternal title={'Completed Tasks'} tasks={completedTasks} />
    </Stack>
  );
};
