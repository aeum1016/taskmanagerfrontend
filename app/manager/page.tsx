import { TaskForm } from '@/components/TaskForm/TaskForm';
import { TaskList } from '@/components/TaskList/TaskList';
import { TaskListToday } from '@/components/TaskList/TaskListToday';
import { Group, Stack } from '@mantine/core';
import classes from "./manager.module.css"
import { GetAllTasks } from '@/api/task/routes';
import ITask from '@/enums/Task/ITask';

const ManagerPage = async () => {
  const tasks: ITask[] = (await (await GetAllTasks()).json()).data;

  return (
    <Group className={classes.taskGroup}>
      <Stack>
        <TaskListToday tasks={tasks} />
        <TaskForm />
      </Stack>
      <TaskList tasks={tasks} />
    </Group>
  );
};

export default ManagerPage;
