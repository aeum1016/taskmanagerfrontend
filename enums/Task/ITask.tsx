export default interface ITask {
  name: string;
  priority?: number;
  dueDate?: number | string;
  description?: string;
  estimateHours?: number;
}
