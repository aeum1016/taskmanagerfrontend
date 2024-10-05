import dayjs from 'dayjs';
import { FC } from 'react';
import { Card, Stack, Text } from '@mantine/core';
import { numberToPriority } from '@/enums/Priority/Priority';
import ITask from '@/enums/Task/ITask';
import { Task } from '../Task/Task';
import classes from './Task.module.css';

interface TaskListProps {
  tasks: ITask[];
  sortByDueDate?: boolean;
  sortByPriority?: boolean;
}

export const TaskList: FC<TaskListProps> = ({
  tasks,
  sortByDueDate,
  sortByPriority,
}): JSX.Element => {
  if (!sortByDueDate && !sortByPriority) sortByDueDate = true;
  if (sortByDueDate === undefined) sortByDueDate = false;
  if (sortByPriority === undefined) sortByPriority = false;

  const dueDates = [
    ...new Set(tasks.map((task) => dayjs(task.dueDate).toDate().toLocaleDateString())),
  ]
    .map((date) => dayjs(date).unix())
    .sort((a, b) => a - b)
    .map((unix) =>
      dayjs(unix * 1000)
        .toDate()
        .toLocaleDateString()
    );
  const priorities = [...new Set(tasks.map((task) => task.priority))];
  priorities.sort();

  if (sortByDueDate) {
    return (
      <Stack>
        {dueDates.map((date) => {
          return (
            <Stack gap={0} key={'list-' + date}>
              <Text>{date}</Text>
              {tasks
                .filter((task) => dayjs(task.dueDate).toDate().toLocaleDateString() === date)
                .map((task) => {
                  return <Task task={task} key={'task-list-' + task.name + task.dueDate} />;
                })}
            </Stack>
          );
        })}
      </Stack>
    );
  } else if (sortByPriority) {
    return (
      <Stack>
        {priorities.map((priority) => {
          return (
            <Stack gap={0} key={'list-' + priority}>
              <Text>{numberToPriority(priority).toString}</Text>
              {tasks
                .filter((task) => task.priority === priority)
                .map((task) => {
                  return <Task task={task} key={'task-list-' + task.name + task.dueDate} />;
                })}
            </Stack>
          );
        })}
      </Stack>
    );
  }
  return <></>;
};
