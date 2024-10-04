import dayjs from 'dayjs';
import { FC } from 'react';
import { Badge, Card, Collapse, Group, Stack, Text, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { PriorityBadge } from '@/enums/Priority/components/PriorityBadge';
import { Description } from './Description/Description';
import { DescriptionToggle } from './Description/DescriptionToggle';
import classes from './Task.module.css';

interface TaskProps {
  name: string;
  priority?: number;
  dueDate?: number;
  description?: string;
}

export const Task: FC<TaskProps> = ({ name, priority, dueDate, description }): JSX.Element => {
  const theme = useMantineTheme();

  const [openDescription, { toggle }] = useDisclosure(false);

  return (
    <Card className={classes.card} shadow="sm" withBorder>
      <Group className={classes.cardLineGroup}>
        <Group className={classes.cardNameGroup}>
          <Text fw={700}>{name}</Text>
          <DescriptionToggle description={description} toggle={toggle} />
        </Group>
        <Group gap={'xs'}>
          <PriorityBadge priority={priority} />
          {dueDate ? (
            <Badge px={4} radius={4} color={theme.colors.yellow[6]}>
              Due: {dayjs(dueDate).toDate().toLocaleDateString()}
            </Badge>
          ) : null}
        </Group>
      </Group>
      <Description description={description} open={openDescription} />
    </Card>
  );
};
