import { FC } from 'react';
import { Button, Group, Stack, Title } from '@mantine/core';
import MyButton from '../Utility/MyButton';
import classes from './DayVisual.module.css';

const DayVisual: FC = (): JSX.Element => {
  return (
    <Stack className={classes.mainStack}>
      <Title className={classes.title}>Itinerary</Title>
      <MyButton>Remake</MyButton>
    </Stack>
  );
};

export default DayVisual;
