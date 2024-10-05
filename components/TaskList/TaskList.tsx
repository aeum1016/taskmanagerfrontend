import dayjs from 'dayjs';
import { FC } from 'react';
import { Card, Stack, Text } from '@mantine/core';
import { numberToPriority } from '@/enums/Priority/Priority';
import ITask from '@/enums/Task/ITask';
import { TaskListInternal } from './TaskListInternal';
import classes from './TaskList.module.css';

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
    ...new Set(
      tasks.map((task) => {
        if (task.dueDate === undefined) return 10000000000000;
        return dayjs(task.dueDate).toDate().toLocaleDateString();
      })
    ),
  ]
    .map((date) => dayjs(date).unix())
    .sort((a, b) => a - b)
    .map((unix) => {
      if (unix === 10000000000) return 'No Due Date';
      else
        return dayjs(unix * 1000)
          .toDate()
          .toLocaleDateString();
    });
  const priorities = [...new Set(tasks.map((task) => task.priority))];
  priorities.sort();

  return (
    <Card className={classes.card} withBorder>
      <Stack className={classes.stack} gap={6}>
        {sortByDueDate
          ? dueDates.map((date) => {
              return (
                <TaskListInternal
                  key={'task-list-internal' + date}
                  title={date}
                  tasks={tasks.filter((task) => {
                    if (task.dueDate === undefined) return date === 'No Due Date';
                    else return dayjs(task.dueDate).toDate().toLocaleDateString() === date;
                  })}
                />
              );
            })
          : priorities.map((priority) => {
              return (
                <TaskListInternal
                  key={'task-list-internal' + priority}
                  title={numberToPriority(priority).toString}
                  tasks={tasks.filter((task) => task.priority === priority)}
                />
              );
            })}
      </Stack>
    </Card>
  );
};
