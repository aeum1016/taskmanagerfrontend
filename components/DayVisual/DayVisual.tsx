import { FC } from 'react';
import { Stack, Title } from '@mantine/core';
import classes from './DayVisual.module.css';

const DayVisual: FC = (): JSX.Element => {
  return (
    <Stack className={classes.mainStack}>
      <Title className={classes.title}>Itinerary</Title>
    </Stack>
  );
};

export default DayVisual;
