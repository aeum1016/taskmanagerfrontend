'use server';

import { Container, Group, Stack } from '@mantine/core';
import { Itinerary } from '@/components/Itinerary/Itinerary';
import { ReloadTasks } from '@/components/ReloadTasks/ReloadTasks';
import { CreateTaskButton } from '@/components/TaskButton/CreateTask/CreateTaskButton';
import { ServerTaskTable } from '@/components/TaskTable/ServerTaskTable';
import { auth } from '@/auth';
import { CreateEvent } from '@/components/Temp/CreateEvent';
import classes from './manager.module.css';

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
            <CreateEvent />
          </Group>
          <ServerTaskTable />
        </Stack>
      </Group>
    </Container>
  );
};

export default ManagerPage;
