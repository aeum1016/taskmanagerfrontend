import { FC } from 'react';
import { Card, Grid, GridCol, Group, Text } from '@mantine/core';
import ITask from '@/enums/Task/ITask';
import { CompletedButton } from '../TaskButton/CompleteTask/CompletedButton';
import { Description } from './Description/Description';
import { DueDateBadge } from './DueDate/DueDateBadge';
import { ExpectedTimeBadge } from './ExpectedTime/ExpectedTimeBadge';
import { PriorityBadge } from './Priority/PriorityBadge';
import classes from './Task.module.css';

interface TaskProps {
  task: ITask;
}

export const Task: FC<TaskProps> = ({ task }): JSX.Element => {
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
          <DueDateBadge dueDate={task.duedate} />
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
