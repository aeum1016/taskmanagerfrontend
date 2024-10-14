export default interface ITask {
  title: string;
  priority?: number;
  duedate?: number | string;
  description?: string;
  estimatehours?: number;
  completed: boolean;
}
