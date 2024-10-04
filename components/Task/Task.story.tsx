import { Stack } from '@mantine/core';
import { Task } from './Task';

export default {
  title: 'Task',
};

export const Usage = () => (
  <Task
    name={'Task Name'}
    priority={0}
    dueDate={1729000000000}
    description={'I am a description for this task'}
  />
);
export const Multiple = () => (
  <Stack gap={0}>
    <Task name={'Do Laundry'} priority={0} dueDate={1730000000000} />
    <Task name={'Assignment 1'} dueDate={1728000000000} />
    <Task name={'COP Exam'} priority={3} />
    <Task name={'Make Food'} dueDate={1729500000000} />
    <Task name={'The Last Task'} priority={2} />
  </Stack>
);
