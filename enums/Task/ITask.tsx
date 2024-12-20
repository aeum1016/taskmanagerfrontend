export default interface ITask {
  id: string;
  userid: string;
  title: string;
  priority?: number;
  duedate?: number | Date;
  description?: string;
  estimatehours?: number;
  tags: string[];
  completed: boolean;
}

export interface IAddTaskPayload {
  title: string;
  priority?: number;
  duedate?: number | Date;
  description?: string;
  estimatehours?: number;
}

export interface IUpdateTaskPayload {
  id: string;
  title?: string;
  priority?: number;
  duedate?: number | Date;
  description?: string;
  estimatehours?: number;
  tags?: string[];
  completed?: boolean;
}

export interface ITaskAsEvent {
  id: string;
  summary: string;
  description: string;
  start: {
    dateTime: string;
  }
  end: {
    dateTime: string;
  }
}