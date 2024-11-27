'use client';

import { FC } from 'react';
import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { reloadTasks, updateTask } from '@/app/api/task/routes';
import ITask from '@/enums/Task/ITask';
import classes from './CompletedButton.module.css';

interface CompletedButtonProps {
  task: ITask;
  fullWidth: boolean;
}

export const CompletedButton: FC<CompletedButtonProps> = ({
  task, fullWidth
}): JSX.Element => {
  return (
    <Button
      className={classes.button}
      variant={task.completed ? 'filled' : 'outline'}
      onClick={() => {
        updateTask({ ...task, completed: !task.completed });
        reloadTasks();
      }}
      fullWidth={fullWidth}
    >
      {task.completed ? 'Open' : 'Complete'}
    </Button>
  );
};
