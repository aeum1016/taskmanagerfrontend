"use client";

import dayjs from 'dayjs';
import { FC } from 'react';
import { Badge, Container, Text } from '@mantine/core';
import taskClasses from '../Task.module.css';
import classes from './DueDateBadge.module.css';

interface DueDateBadgeProps {
  dueDate: number | string | Date | undefined;
}

export const DueDateBadge: FC<DueDateBadgeProps> = ({
  dueDate,
}): JSX.Element => {

  return (
    <>
      {dueDate ? (
        <Badge className={`${taskClasses.badge} ${classes.dueDateBadge}`}>
          <Text className={classes.dueDateText}>
            Due: {dayjs(dueDate).format("MM/DD")}
          </Text>
        </Badge>
      ) : (
        <Container className={classes.dueDateBadge} />
      )}
    </>
  );
};
