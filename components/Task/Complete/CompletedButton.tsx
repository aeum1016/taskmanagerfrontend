'use client';

import { FC } from 'react';
import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { reloadTasks, updateTask } from '@/app/api/task/routes';
import ITask from '@/enums/Task/ITask';
import classes from './CompletedButton.module.css';

interface CompletedButtonProps {
  task: ITask;
}

export const CompletedButton: FC<CompletedButtonProps> = ({
  task,
}): JSX.Element => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Button
      variant={task.completed ? 'filled' : 'outline'}
      onClick={() => {
        updateTask({ ...task, completed: !task.completed });
        reloadTasks();
      }}
      fullWidth
    >
      {task.completed ? 'Open Task' : 'Complete Task'}
    </Button>
  );
};
