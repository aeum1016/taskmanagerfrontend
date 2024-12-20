import { ExampleTask } from '@/enums/Task/ExampleTask';
import { Task } from './Task';

export default {
  title: 'Task',
};

export const Usage = () => (
  <Task
    task={ExampleTask}
    buttonPrompt={"This is an example"}
    onClick={() => { }}
  />
);
