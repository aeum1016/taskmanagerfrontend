import ITask from './ITask';

export const ExampleTask: ITask = {
  title: 'Example Task',
  priority: 1,
  duedate: '10/4/2024',
  description: 'This is an example task description.',
  estimatehours: 1,
  completed: false,
};

export const ExampleTaskNumberDueDate: ITask = {
  title: 'Example Task Number Due Date',
  priority: 1,
  duedate: 1729000000000,
  description: 'This is an example task description.',
  estimatehours: 1,
  completed: false,
};

export const ExampleTaskDiffPriority: ITask = {
  title: 'Example Task Different Priority',
  priority: 3,
  duedate: 1729000000000,
  description: 'This is an example task description.',
  estimatehours: 1,
  completed: false,
};

export const ExampleTaskNoPriority: ITask = {
  title: 'Example Task No Priority',
  duedate: '10/10/2024',
  description: 'This is an example task description.',
  estimatehours: 2,
  completed: false,
};

export const ExampleTaskNoDueDate: ITask = {
  title: 'Example Task No Due Date',
  priority: 1,
  description: 'This is an example task description.',
  estimatehours: 3,
  completed: false,
};

export const ExampleTaskNoDescription: ITask = {
  title: 'Example Task No Description',
  priority: 1,
  duedate: '10/4/2024',
  estimatehours: 2,
  completed: false,
};

export const ExampleTaskNoHours: ITask = {
  title: 'Example Task No Hours',
  priority: 1,
  duedate: '10/4/2024',
  completed: false,
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
