'use server';

import { Container, Group, Stack } from '@mantine/core';
import { Itinerary } from '@/components/Itinerary/Itinerary';
import { ReloadTasks } from '@/components/ReloadTasks/ReloadTasks';
import { CreateTaskButton } from '@/components/TaskButton/CreateTask/CreateTaskButton';
import { TaskTable } from '@/components/TaskTable/TaskTable';
import classes from './manager.module.css';
import { auth } from '@/auth';

const ManagerPage = async () => {
  const session = await auth();

  return (
    <Container className={classes.managerContainer}>
      <Group className={classes.managerGroup}>
        <Itinerary session={session} />
        <Stack>
          <Group>
            <ReloadTasks />
            <CreateTaskButton />
          </Group>
          <TaskTable />
        </Stack>
      </Group>
    </Container>
  );
};

export default ManagerPage;
