import ITask from './ITask';

export const ExampleTask: ITask = {
  name: 'Example Task',
  priority: 1,
  dueDate: '10/4/2024',
  description: 'This is an example task description.',
};

export const ExampleTaskNumberDueDate: ITask = {
  name: 'Example Task Number Due Date',
  priority: 1,
  dueDate: 1729000000000,
  description: 'This is an example task description.',
};

export const ExampleTaskDiffPriority: ITask = {
  name: 'Example Task Different Priority',
  priority: 3,
  dueDate: 1729000000000,
  description: 'This is an example task description.',
};

export const ExampleTaskNoPriority: ITask = {
  name: 'Example Task No Priority',
  dueDate: '10/10/2024',
  description: 'This is an example task description.',
};

export const ExampleTaskNoDueDate: ITask = {
  name: 'Example Task No Due Date',
  priority: 1,
  description: 'This is an example task description.',
};

export const ExampleTaskNoDescription: ITask = {
  name: 'Example Task No Description',
  priority: 1,
  dueDate: '10/4/2024',
};

export const ExampleTasks: ITask[] = [
  ExampleTask,
  ExampleTaskNumberDueDate,
  ExampleTaskDiffPriority,
  ExampleTaskNoPriority,
  ExampleTaskNoDueDate,
  ExampleTaskNoDescription,
];
