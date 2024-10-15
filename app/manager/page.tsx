import { TaskForm } from '@/components/TaskForm/TaskForm';
import { TaskList } from '@/components/TaskList/TaskList';
import { TaskListToday } from '@/components/TaskList/TaskListToday';
import { Group, Stack } from '@mantine/core';
import classes from "./manager.module.css"
import { ReloadTasks } from '@/components/ReloadTasks/ReloadTasks';

const ManagerPage = () => {

  return (
    <Group className={classes.taskGroup}>
      <ReloadTasks />
      <Stack>
        <TaskListToday />
        <TaskForm />
      </Stack>
      <TaskList />
    </Group>
  );
};

export default ManagerPage;
