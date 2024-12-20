import { getTasks } from "@/app/api/task/routes";
import { FC } from "react";
import { TaskTable } from "./TaskTable";

export const ServerTaskTable: FC = async (): Promise<JSX.Element> => {
  const tasks = await getTasks();
  return <TaskTable tasks={tasks} />
}