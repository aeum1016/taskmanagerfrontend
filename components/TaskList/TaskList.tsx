import dayjs from 'dayjs';
import { FC } from 'react';
import {
  Card,
  Stack,
} from '@mantine/core';
import ITask from '@/enums/Task/ITask';
import { TaskListInternal } from './TaskListInternal/TaskListInternal';
import classes from './TaskList.module.css';
import { GetAllTasks } from '@/api/task/routes';

interface TaskListProps {
}

export const TaskList: FC<TaskListProps> = async ({ }): Promise<JSX.Element> => {
  const tasks: ITask[] = await GetAllTasks();

  const dueDates = [
    ...new Set(
      tasks.map((task) => {
        if (task.duedate === undefined) return dayjs(0).toDate().toLocaleDateString();
        else return dayjs(task.duedate).toDate().toLocaleDateString();
      })
    ),
  ]
    .sort((a: string, b: string) => dayjs(a).unix() - dayjs(b).unix())
    .map((date) => {
      if (date === dayjs(0).toDate().toLocaleDateString()) return 'No Due Date';
      else return date;
    });

  const priorities = [...new Set(tasks.map((task) => task.priority))].sort();

  return (
    <Card className={classes.card} withBorder>
      <Stack className={classes.stack} gap={6}>
        {dueDates.map((date) => {

          const tasksOnDueDate = tasks.filter((task) => {
            if (task.duedate === undefined)
              return date === 'No Due Date';
            else
              return (
                dayjs(task.duedate).toDate().toLocaleDateString() ===
                date
              );
          })

          return (
            <TaskListInternal
              key={'task-list-internal' + date}
              title={date}
              tasks={tasksOnDueDate}
            />
          );
        })}
      </Stack>
    </Card>
  );
};
