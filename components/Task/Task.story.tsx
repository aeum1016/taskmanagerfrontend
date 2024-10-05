import { Task } from './Task';

export default {
  title: 'Task',
};

export const Usage = () => (
  <Task
    task={{
      name: 'Task Name',
      priority: 0,
      dueDate: 1729000000000,
      description: 'I am a description for this task',
    }}
  />
);
