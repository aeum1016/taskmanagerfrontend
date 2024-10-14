import { TaskList } from './TaskList';

export default {
  title: 'TaskList',
};

export const ByDate = () => (
  <TaskList
    tasks={[
      {
        name: 'Task Name',
        priority: 0,
        dueDate: 1726000000000,
        description: 'I am a description for this task',
      },
      {
        name: 'Task Name',
        priority: 0,
        dueDate: 1729050000000,
        description: 'I am a description for this task',
      },
      {
        name: 'Task Name',
        priority: 0,
        dueDate: 1729000000000,
        description: 'I am a description for this task',
      },
    ]}
  />
);
