'use server';

import { Container, Group, Stack } from '@mantine/core';
import { Itinerary } from '@/components/Itinerary/Itinerary';
import { ReloadTasks } from '@/components/ReloadTasks/ReloadTasks';
import { CreateTaskButton } from '@/components/TaskButton/CreateTaskButton';
import { TaskTable } from '@/components/TaskTable/TaskTable';
import classes from './manager.module.css';

const ManagerPage = () => {
  return (
    <Container className={classes.managerContainer}>
      <Group className={classes.managerGroup}>
        <Itinerary />
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
