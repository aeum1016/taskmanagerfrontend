import { Stack } from '@mantine/core';
import { Task } from './Task';

export default {
  title: 'Task',
};

export const Usage = () => <Task name={'Task Name'} priority={1} dueDate={1729000000000} />;
export const Multiple = () => (
  <Stack gap={0}>
    <Task name={'Do Laundry'} />
    <Task name={'Assignment 1'} />
    <Task name={'COP Exam'} />
    <Task name={'Make Food'} />
    <Task name={'The Last Task'} />
  </Stack>
);
