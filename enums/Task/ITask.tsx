export default interface ITask {
  userid: string;
  title: string;
  priority?: number;
  duedate?: number | Date;
  description?: string;
  estimatehours?: number;
  completed: boolean;
}
