import { FC } from 'react';
import { Card, Grid, GridCol, Group, Text } from '@mantine/core';
import ITask from '@/enums/Task/ITask';
import { CompletedButton } from '../TaskButton/CompleteTask/CompletedButton';
import { Description } from './Description/Description';
import { ExpectedTimeBadge } from './ExpectedTime/ExpectedTimeBadge';
import { PriorityBadge } from './Priority/PriorityBadge';
import classes from './Task.module.css';
import dynamic from 'next/dynamic';

interface TaskProps {
  task: ITask;
}

export const Task: FC<TaskProps> = ({ task }): JSX.Element => {

  const DueDate = dynamic(() => import('./DueDate/DueDateBadge').then((mod) => mod.DueDateBadge), { ssr: false })

  return (
    <Card className={classes.card} withBorder>
      <Group className={classes.topGroup}>
        <Text className={classes.cardName} truncate={'end'}>
          {task.title}
        </Text>
      </Group>
      <Grid gutter={0}>
        <GridCol span={4}>
          <ExpectedTimeBadge expectation={task.estimatehours} />
        </GridCol>
        <GridCol span={4}>
          <DueDate dueDate={task.duedate} />
        </GridCol>
        <GridCol span={4}>
          <PriorityBadge priority={task.priority} />
        </GridCol>
      </Grid>
      <CompletedButton task={task} fullWidth />
      <Group className={classes.cardDescription}>
        <Description description={task.description} />
      </Group>
    </Card>
  );
};
