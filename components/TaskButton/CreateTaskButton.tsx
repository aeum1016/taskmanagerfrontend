'use client';

import { FC } from 'react';
import { Button, Modal, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { TaskForm } from '../TaskForm/TaskForm';
import classes from './CreateTaskButton.module.css';

export const CreateTaskButton: FC = (): JSX.Element => {
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Button
        className={classes.button}
        color={theme.colors.cyan[7]}
        onClick={open}
      >
        Create Task
      </Button>
      <Modal opened={opened} onClose={close} title={'Create a Task'}>
        <TaskForm close={close} />
      </Modal>
    </>
  );
};
