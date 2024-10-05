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

export const ByPriority = () => (
  <TaskList
    sortByPriority={true}
    tasks={[
      {
        name: 'Task Name',
        priority: 0,
        dueDate: 1726000000000,
        description: 'I am a description for this task',
      },
      {
        name: 'Task Name',
        priority: 1,
        dueDate: 1729000000000,
        description: 'I am a description for this task',
      },
      {
        name: 'Task Name',
        dueDate: 1729000000000,
        description: 'I am a description for this task',
      },
    ]}
  />
);
