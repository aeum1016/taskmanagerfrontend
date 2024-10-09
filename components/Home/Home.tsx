'use client';

import { FC } from 'react';
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Group,
  Stack,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ExampleTasks } from '@/enums/Task/ExampleTask';
import { Header } from '../Header/Header';
import { TaskForm } from '../TaskForm/TaskForm';
import { TaskList } from '../TaskList/TaskList';
import { TaskListToday } from '../TaskList/TaskListToday';
import classes from './Home.module.css';

export const Home: FC = (): JSX.Element => {
  const [sortByDueDate, { toggle }] = useDisclosure(true);

  return (
    <AppShell header={{ height: 60 }} padding="lg">
      <AppShellHeader>
        <Header />
      </AppShellHeader>
      <AppShellMain>
        <Group className={classes.taskGroup}>
          <Stack>
            <TaskListToday tasks={ExampleTasks} />
            <TaskForm />
          </Stack>
          <TaskList tasks={ExampleTasks} />
        </Group>
      </AppShellMain>
    </AppShell>
  );
};
