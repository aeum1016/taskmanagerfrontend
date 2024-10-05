'use client';

import { FC } from 'react';
import { AppShell, AppShellHeader, AppShellMain, Group, useMantineTheme } from '@mantine/core';
import { ExampleTasks } from '@/enums/Task/ExampleTask';
import { Header } from '../Header/Header';
import { TaskList } from '../TaskList/TaskList';
import classes from './Home.module.css';

export const Home: FC = (): JSX.Element => {
  const theme = useMantineTheme();

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShellHeader>
        <Header />
      </AppShellHeader>
      <AppShellMain>
        <Group align={'flex-start'}>
          <TaskList tasks={ExampleTasks} sortByDueDate={true} />
          <TaskList tasks={ExampleTasks} sortByPriority={true} />
        </Group>
      </AppShellMain>
    </AppShell>
  );
};
