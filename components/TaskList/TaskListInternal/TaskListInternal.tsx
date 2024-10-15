import { FC } from 'react';
import { Stack, Text } from '@mantine/core';
import ITask from '@/enums/Task/ITask';
import { Task } from '../../Task/Task';
import classes from '../TaskList.module.css';

interface TaskListInternalProps {
  title: string | undefined;
  tasks: ITask[];
}

export const TaskListInternal: FC<TaskListInternalProps> = ({
  title,
  tasks,
}): JSX.Element => {
  return (
    <Stack gap={0} key={'list-' + title}>
      <Text className={classes.title}>{title}</Text>
      {tasks.map((task) => {
        return (
          <Task task={task} key={'task-list-' + task.title + task.duedate} />
        );
      })}
    </Stack>
  );
};
