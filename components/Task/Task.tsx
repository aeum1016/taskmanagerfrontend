import { FC } from 'react';
import { IconAdjustments } from '@tabler/icons-react';
import { ActionIcon, Card, Container, Grid, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { PriorityBadge } from '@/enums/Priority/components/PriorityBadge';
import { Description } from './Description/Description';
import { DescriptionToggle } from './Description/DescriptionToggle';
import { DueDateBadge } from './DueDate/DueDateBadge';
import classes from './Task.module.css';

interface TaskProps {
  name: string;
  priority?: number;
  dueDate?: number | string;
  description?: string;
}

export const Task: FC<TaskProps> = ({ name, priority, dueDate, description }): JSX.Element => {
  const [openDescription, { toggle }] = useDisclosure(false);

  return (
    <Card className={classes.card} shadow="sm" withBorder>
      <Group className={classes.cardLineGroup}>
        <Group className={classes.cardNameGroup}>
          <Text fw={700}>{name}</Text>
          <DescriptionToggle description={description} toggle={toggle} />
        </Group>
        <Group gap={3}>
          <PriorityBadge priority={priority} />
          <DueDateBadge dueDate={dueDate} />
          <ActionIcon variant={'transparent'} size={'sm'}>
            <IconAdjustments stroke={1.5} />
          </ActionIcon>
        </Group>
      </Group>
      <Description description={description} open={openDescription} />
    </Card>
  );
};
