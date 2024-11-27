'use client';

import { FC } from 'react';
import { Button, Modal, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { EditTaskForm } from '../../TaskForm/EditTaskForm';
import ITask from '@/enums/Task/ITask';
import classes from './EditTaskButton.module.css';

interface EditTaskButton {
  task: ITask
}

export const EditTaskButton: FC<EditTaskButton> = ({ task }): JSX.Element => {
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Button
        className={classes.editButton}
        color={theme.colors.cyan[7]}
        onClick={open}
      >
        Edit
      </Button>
      <Modal opened={opened} onClose={close} title={'Edit Task'}>
        <EditTaskForm task={task} close={close} />
      </Modal>
    </>
  );
};
