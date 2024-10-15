import ITask from './ITask';

export const ExampleTask: ITask = {
  userid: "123456",
  title: 'Example Task',
  priority: 1,
  description: 'This is an example task description.',
  estimatehours: 1,
  completed: false,
};

export const ExampleTaskNumberDueDate: ITask = {
  userid: "123456",
  title: 'Example Task Number Due Date',
  priority: 1,
  duedate: 1729000000000,
  description: 'This is an example task description.',
  estimatehours: 1,
  completed: false,
};

export const ExampleTaskDiffPriority: ITask = {
  userid: "123456",
  title: 'Example Task Different Priority',
  priority: 3,
  duedate: 1729000000000,
  description: 'This is an example task description.',
  estimatehours: 1,
  completed: false,
};

export const ExampleTaskNoPriority: ITask = {
  userid: "123456",
  title: 'Example Task No Priority',
  duedate: 1729000000000,
  description: 'This is an example task description.',
  estimatehours: 2,
  completed: false,
};

export const ExampleTaskNoDueDate: ITask = {
  userid: "123456",
  title: 'Example Task No Due Date',
  priority: 1,
  description: 'This is an example task description.',
  estimatehours: 3,
  completed: false,
};

export const ExampleTaskNoDescription: ITask = {
  userid: "123456",
  title: 'Example Task No Description',
  priority: 1,
  duedate: 1729000000000,
  estimatehours: 2,
  completed: false,
};

export const ExampleTaskNoHours: ITask = {
  userid: "123456",
  title: 'Example Task No Hours',
  priority: 1,
  duedate: 1729000000000,
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
