import ITask from './ITask';

export const ExampleTask: ITask = {
  id: '123456',
  userid: '123456',
  title: 'Example Task',
  priority: 1,
  description: 'This is an example task description.',
  estimatehours: 1,
  tags: [],
  completed: false,
};

export const ExampleTaskNumberDueDate: ITask = {
  id: '123456',
  userid: '123456',
  title: 'Example Task Number Due Date',
  priority: 1,
  duedate: 1729000000000,
  description: 'This is an example task description.',
  estimatehours: 1,
  tags: [],
  completed: false,
};

export const ExampleTaskDiffPriority: ITask = {
  id: '123456',
  userid: '123456',
  title: 'Example Task Different Priority',
  priority: 3,
  duedate: 1729000000000,
  description: 'This is an example task description.',
  estimatehours: 1,
  tags: [],
  completed: false,
};

export const ExampleTaskNoPriority: ITask = {
  id: '123456',
  userid: '123456',
  title: 'Example Task No Priority',
  duedate: 1729000000000,
  description: 'This is an example task description.',
  estimatehours: 2,
  tags: [],
  completed: false,
};

export const ExampleTaskNoDueDate: ITask = {
  id: '123456',
  userid: '123456',
  title: 'Example Task No Due Date',
  priority: 1,
  description: 'This is an example task description.',
  estimatehours: 3,
  tags: [],
  completed: false,
};

export const ExampleTaskNoDescription: ITask = {
  id: '123456',
  userid: '123456',
  title: 'Example Task No Description',
  priority: 1,
  duedate: 1729000000000,
  estimatehours: 2,
  tags: [],
  completed: false,
};

export const ExampleTaskNoHours: ITask = {
  id: '123456',
  userid: '123456',
  title: 'Example Task No Hours',
  priority: 1,
  duedate: 1729000000000,
  tags: [],
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
