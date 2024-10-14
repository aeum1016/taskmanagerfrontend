import { FC } from 'react';
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Group,
  Stack,
} from '@mantine/core';
import { GET } from '@/app/manager/api/route';
import { ExampleTasks } from '@/enums/Task/ExampleTask';
import ITask from '@/enums/Task/ITask';
import { Header } from '../Header/Header';
import { TaskForm } from '../TaskForm/TaskForm';
import { TaskList } from '../TaskList/TaskList';
import { TaskListToday } from '../TaskList/TaskListToday';
import classes from './Manager.module.css';

export const Home: FC = async (): Promise<JSX.Element> => {
  const tasks: ITask[] = (await (await GET()).json()).data;

  console.log(ExampleTasks);

  return (
    <AppShell header={{ height: 60 }} padding="lg">
      <AppShellHeader>
        <Header />
      </AppShellHeader>
      <AppShellMain>
        <Group className={classes.taskGroup}>
          <Stack>
            <TaskListToday tasks={tasks} />
            <TaskForm />
          </Stack>
          <TaskList tasks={tasks} />
        </Group>
      </AppShellMain>
    </AppShell>
  );
};
