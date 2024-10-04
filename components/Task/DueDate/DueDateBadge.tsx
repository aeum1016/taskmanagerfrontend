import dayjs from 'dayjs';
import { FC } from 'react';
import { Badge, Container, useMantineTheme } from '@mantine/core';
import classes from './DueDate.module.css';

interface DueDateBadgeProps {
  dueDate: number | string | Date | undefined;
}

export const DueDateBadge: FC<DueDateBadgeProps> = ({ dueDate }): JSX.Element => {
  const theme = useMantineTheme();

  if (typeof dueDate === 'number' || typeof dueDate === 'string') dueDate = dayjs(dueDate).toDate();

  return (
    <>
      {dueDate ? (
        <Badge className={classes.dueDateBadge} color={theme.colors.yellow[6]}>
          {dueDate.toLocaleDateString()}
        </Badge>
      ) : (
        <Container className={classes.dueDateBadge} />
      )}
    </>
  );
};
