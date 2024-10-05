import dayjs from 'dayjs';
import { FC } from 'react';
import { Badge, Container, useMantineTheme } from '@mantine/core';
import classes from './DueDate.module.css';

interface DueDateBadgeProps {
  dueDate: number | string | Date | undefined;
}

export const DueDateBadge: FC<DueDateBadgeProps> = ({ dueDate }): JSX.Element => {
  const theme = useMantineTheme();

  const dateJS = dayjs(dueDate);

  const dueInDays = dateJS.diff(dayjs(), 'days');
  let color = theme.colors.green[7];
  if (dueInDays <= 1) color = theme.colors.red[7];
  else if (dueInDays <= 3) color = theme.colors.orange[7];
  else if (dueInDays <= 7) color = theme.colors.yellow[7];

  return (
    <>
      {dueDate ? (
        <Badge className={classes.dueDateBadge} color={color}>
          {dateJS.format('MM/DD')}
        </Badge>
      ) : (
        <Container className={classes.dueDateBadge} />
      )}
    </>
  );
};
