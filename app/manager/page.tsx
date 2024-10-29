import { Container, Group } from '@mantine/core';
import { Itinerary } from '@/components/Itinerary/Itinerary';
import { ReloadTasks } from '@/components/ReloadTasks/ReloadTasks';
import { TaskTable } from '@/components/TaskTable/TaskTable';
import classes from './manager.module.css';

const ManagerPage = () => {
  return (
    <Container className={classes.managerContainer}>
      <Group className={classes.managerGroup}>
        <Itinerary />
        <TaskTable />
      </Group>
    </Container>
  );
};

export default ManagerPage;
