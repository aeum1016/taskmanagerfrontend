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

  console.log(dayjs(dueDate).toDate().toLocaleDateString())
  console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)

  return (
    <>
      {dueDate ? (
        <Badge className={`${taskClasses.badge} ${classes.dueDateBadge}`}>
          <Text className={classes.dueDateText}>
            Due: {dayjs(dueDate).toDate().toLocaleDateString()}
          </Text>
        </Badge>
      ) : (
        <Container className={classes.dueDateBadge} />
      )}
    </>
  );
};
