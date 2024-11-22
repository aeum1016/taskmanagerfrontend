'use client';

import { FC } from 'react';
import { IconCheck } from '@tabler/icons-react';
import { ActionIcon, Button, Checkbox, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { updateTask } from '@/app/api/task/routes';
import ITask from '@/enums/Task/ITask';
import classes from './CompletedButton.module.css';

interface CompletedButtonProps {
  task: ITask;
}

export const CompletedCheckbox: FC<CompletedButtonProps> = ({
  task,
}): JSX.Element => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Complete Task">
        Done?
        <Button onClick={() => updateTask({ ...task, completed: true })} />
      </Modal>

      <ActionIcon variant={'outline'} onClick={open}>
        <IconCheck size={'sm'} />
      </ActionIcon>
    </>
  );

  return <Checkbox className={classes.checkbox} />;
};
