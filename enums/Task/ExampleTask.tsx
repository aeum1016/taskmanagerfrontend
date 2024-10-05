import ITask from './ITask';

export const ExampleTask: ITask = {
  name: 'Example Task',
  priority: 1,
  dueDate: '10/4/2024',
  description: 'This is an example task description.',
  estimateHours: 1,
};

export const ExampleTaskNumberDueDate: ITask = {
  name: 'Example Task Number Due Date',
  priority: 1,
  dueDate: 1729000000000,
  description: 'This is an example task description.',
  estimateHours: 1,
};

export const ExampleTaskDiffPriority: ITask = {
  name: 'Example Task Different Priority',
  priority: 3,
  dueDate: 1729000000000,
  description: 'This is an example task description.',
  estimateHours: 1,
};

export const ExampleTaskNoPriority: ITask = {
  name: 'Example Task No Priority',
  dueDate: '10/10/2024',
  description: 'This is an example task description.',
  estimateHours: 2,
};

export const ExampleTaskNoDueDate: ITask = {
  name: 'Example Task No Due Date',
  priority: 1,
  description: 'This is an example task description.',
  estimateHours: 3,
};

export const ExampleTaskNoDescription: ITask = {
  name: 'Example Task No Description',
  priority: 1,
  dueDate: '10/4/2024',
  estimateHours: 2,
};

export const ExampleTaskNoHours: ITask = {
  name: 'Example Task No Hours',
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
  ExampleTaskNoHours,
];
