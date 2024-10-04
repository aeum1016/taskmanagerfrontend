import { FC } from 'react';
import { Badge, Container, useMantineTheme } from '@mantine/core';
import IPriority from '../IPriority';
import { numberToPriority, priorityToColor } from '../Priority';
import classes from './Priority.module.css';

interface PriorityBadgeProps {
  priority: number | IPriority | undefined;
}

export const PriorityBadge: FC<PriorityBadgeProps> = ({ priority }): JSX.Element => {
  const theme = useMantineTheme();

  if (typeof priority === 'number') priority = numberToPriority(priority);

  return (
    <>
      {priority ? (
        <Badge className={classes.priorityBadge} color={priorityToColor(priority, theme)}>
          {priority.text}
        </Badge>
      ) : (
        <Container className={classes.priorityBadge} />
      )}
    </>
  );
};
