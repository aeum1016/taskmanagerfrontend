import { FC } from 'react';
import { Card, Checkbox, Grid, GridCol, Group, Text } from '@mantine/core';
import ITask from '@/enums/Task/ITask';
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
        <Checkbox className={classes.checkbox} />
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
      <Group className={classes.cardDescription}>
        <Description description={task.description} />
      </Group>
    </Card>
  );
};
