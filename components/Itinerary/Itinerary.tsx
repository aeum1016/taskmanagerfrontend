"use client";

import { FC, useEffect, useState } from 'react';
import { getTasks } from '@/app/api/task/routes';
import ITask from '@/enums/Task/ITask';
import classes from './Itinerary.module.css';
import { filterForCompleted, filterForNextUp, sortingFunction } from '@/enums/Task/TaskSort';
import { getFreeHours } from '@/enums/Calendar/CalendarFuncs';
import { getFreeBusy } from '@/app/api/calendar/routes';
import dynamic from 'next/dynamic';
import { TimeIntervals } from '@/enums/Calendar/CalendarTypes';
import dayjs from 'dayjs';
import { Stack } from '@mantine/core';
import { TaskListInternal } from './ItineraryInternal/ItineraryInternal';

export const Itinerary: FC = ({ }): JSX.Element => {

  const [hours, setHours] = useState<{
    freeHours: TimeIntervals;
    minutesFree: number;
  }>()
  const [filteredTasks, setFilteredTasks] = useState<ITask[]>([])
  const [completedTasks, setCompletedTasks] = useState<ITask[]>([])

  useEffect(() => {
    (async () => {
      const todaysTasks: ITask[] = await getTasks();

      todaysTasks.sort(sortingFunction);

      const start = dayjs(dayjs().toDate().toDateString()).toDate();
      const end = dayjs(start).add(1, 'day').toDate();

      const busyHours = await getFreeBusy(start, end, Intl.DateTimeFormat().resolvedOptions().timeZone);
      const hours = getFreeHours(busyHours);
      setHours(hours);

      const left = { left: (hours.minutesFree / 60) }

      setFilteredTasks(todaysTasks.filter((task) =>
        filterForNextUp(task, left)
      ));

      setCompletedTasks(todaysTasks.filter((task) => filterForCompleted(task, true)));
    })();
  }, [])

  const IntervalText = dynamic(() => import('./IntervalText/IntervalText').then((mod) => mod.IntervalText), { ssr: false })

  return (
    <Stack className={classes.card}>
      <IntervalText hours={hours} />
      <TaskListInternal title={"Today's Itinerary"} tasks={filteredTasks} />
      <TaskListInternal title={'Completed Tasks'} tasks={completedTasks} />
    </Stack>
  );
};
