'use client';

import { FC } from 'react';
import { AppShell, AppShellHeader, AppShellMain, Grid, GridCol, Stack } from '@mantine/core';
import { ExampleTasks } from '@/enums/Task/ExampleTask';
import { Header } from '../Header/Header';
import { TaskForm } from '../TaskForm/TaskForm';
import { TaskList } from '../TaskList/TaskList';
import { TaskListToday } from '../TaskList/TaskListToday';
import classes from './Home.module.css';

export const Home: FC = (): JSX.Element => {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShellHeader>
        <Header />
      </AppShellHeader>
      <AppShellMain>
        <Stack>
          <TaskListToday tasks={ExampleTasks} />
          <Grid align={'flex-start'} columns={22}>
            <GridCol span={8}>
              <TaskList tasks={ExampleTasks} sortByDueDate={true} />
            </GridCol>
            <GridCol span={8}>
              <TaskList tasks={ExampleTasks} sortByPriority={true} />
            </GridCol>
            <GridCol span={6}>
              <TaskForm />
            </GridCol>
          </Grid>
        </Stack>
      </AppShellMain>
    </AppShell>
  );
};
