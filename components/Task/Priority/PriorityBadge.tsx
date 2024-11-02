'use client';

import { FC } from 'react';
import { Badge, Container, Text, useMantineTheme } from '@mantine/core';
import IPriority from '@/enums/Priority/IPriority';
import { numberToPriority, priorityToColor } from '@/enums/Priority/Priority';
import taskClasses from '../Task.module.css';
import classes from './PriorityBadge.module.css';

interface PriorityBadgeProps {
  priority: number | IPriority | undefined;
}

export const PriorityBadge: FC<PriorityBadgeProps> = ({
  priority,
}): JSX.Element => {
  const theme = useMantineTheme();

  if (typeof priority === 'number') priority = numberToPriority(priority);

  return (
    <>
      {priority ? (
        <Badge
          className={taskClasses.badge}
          color={priorityToColor(priority, theme)}
          variant={'light'}
        >
          <Text className={classes.priorityText}>{priority.text}</Text>
        </Badge>
      ) : (
        <Container className={classes.priorityBadge} />
      )}
    </>
  );
};
