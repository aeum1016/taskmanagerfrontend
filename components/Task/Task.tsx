import { FC } from 'react';
import { IconAdjustments } from '@tabler/icons-react';
import { ActionIcon, Card, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { PriorityBadge } from '@/enums/Priority/components/PriorityBadge';
import ITask from '@/enums/Task/ITask';
import { Description } from './Description/Description';
import { DescriptionToggle } from './Description/DescriptionToggle';
import { DueDateBadge } from './DueDate/DueDateBadge';
import classes from './Task.module.css';

interface TaskProps {
  task: ITask;
}

export const Task: FC<TaskProps> = ({ task }): JSX.Element => {
  const [openDescription, { toggle }] = useDisclosure(false);

  return (
    <Card className={classes.card} shadow="sm" withBorder>
      <Group className={classes.cardLineGroup}>
        <Group className={classes.cardNameGroup}>
          <Text fw={700} truncate>
            {task.name}
          </Text>
          <DescriptionToggle description={task.description} toggle={toggle} />
        </Group>
        <Group className={classes.cardBadgesGroup}>
          <PriorityBadge priority={task.priority} />
          <DueDateBadge dueDate={task.dueDate} />
          <ActionIcon variant={'transparent'} size={'sm'}>
            <IconAdjustments stroke={1.5} />
          </ActionIcon>
        </Group>
      </Group>
      <Description description={task.description} open={openDescription} />
    </Card>
  );
};
