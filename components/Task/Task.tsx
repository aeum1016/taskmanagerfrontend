import dayjs from 'dayjs';
import { FC } from 'react';
import { Badge, Card, Collapse, Group, Stack, Text, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
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
    <Card shadow="sm" py={'xs'} radius={0} withBorder>
      <Group justify={'space-between'}>
        <Group align={'baseline'} gap={'xs'}>
          <Text fw={700}>{name}</Text>
          {description ? (
            <Text
              size={'xs'}
              c={theme.colors.blue[4]}
              style={{ cursor: 'pointer', userSelect: 'none' }}
              onClick={toggle}
            >
              more
            </Text>
          ) : null}
        </Group>
        <Group gap={'xs'}>
          {priority ? (
            <Badge px={4} radius={4} color={theme.colors.red[8]}>
              Priority: {priority}
            </Badge>
          ) : null}
          {dueDate ? (
            <Badge px={4} radius={4} color={theme.colors.yellow[6]}>
              Due: {dayjs(dueDate).toDate().toLocaleDateString()}
            </Badge>
          ) : null}
        </Group>
      </Group>
      <Stack align={'flex-start'} gap={'xs'}>
        <Collapse in={openDescription}>
          <Text size={'sm'}>{description}</Text>
        </Collapse>
      </Stack>
    </Card>
  );
};
