export default interface ITask {
  userid: string;
  title: string;
  priority?: number;
  duedate?: number | string | Date;
  description?: string;
  estimatehours?: number;
  completed: boolean;
}
