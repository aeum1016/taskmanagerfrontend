import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'
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
  dayjs.extend(utc)
  const dateJS = dayjs(dueDate);

  return (
    <>
      {dueDate ? (
        <Badge className={`${taskClasses.badge} ${classes.dueDateBadge}`}>
          <Text className={classes.dueDateText}>
            Due: {dateJS.format('MM/DD')}
          </Text>
        </Badge>
      ) : (
        <Container className={classes.dueDateBadge} />
      )}
    </>
  );
};
