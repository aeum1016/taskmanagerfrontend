import { FC } from 'react';
import {
  Table,
  TableScrollContainer,
  TableTbody,
  TableTh,
  TableThead,
  TableTr,
} from '@mantine/core';
import { getTasks } from '@/app/api/task/routes';
import ITask from '@/enums/Task/ITask';
import classes from './TaskTable.module.css';
import { filterForCompleted, sortingFunction } from '@/enums/Task/TaskSort';
import { TableRows } from './TableRows/TableRows';

interface TaskTableProps { }

export const TaskTable: FC<
  TaskTableProps
> = async ({ }): Promise<JSX.Element> => {

  const tasks: ITask[] = await getTasks();

  const sortedTasks = tasks.sort(sortingFunction)
  const openTasks = sortedTasks.filter((task) => filterForCompleted(task, false));
  const completedTasks = sortedTasks.filter((task) => filterForCompleted(task, true));

  const openRows = openTasks.map((task) => (
    <TableRows key={task.id} task={task} />
  ));

  const completedRows = completedTasks.map((task) => (
    <TableRows key={task.id} task={task} />
  ));

  return (
    <TableScrollContainer minWidth={500} className={classes.container}>
      <Table highlightOnHover>
        <TableThead>
          <TableTr>
            <TableTh fz={"h4"}>
              Open Tasks
            </TableTh>
          </TableTr>
        </TableThead>
        <TableThead>
          <TableTr>
            <TableTh>Title</TableTh>
            <TableTh>Description</TableTh>
            <TableTh>Priority</TableTh>
            <TableTh>Due Date</TableTh>
          </TableTr>
        </TableThead>
        <TableTbody>{openRows}</TableTbody>
        <TableThead>
          <TableTr>
            <TableTh fz={"h4"}>
              Completed Tasks
            </TableTh>
          </TableTr>
        </TableThead>
        <TableThead>
          <TableTr>
            <TableTh>Title</TableTh>
            <TableTh>Description</TableTh>
            <TableTh>Priority</TableTh>
            <TableTh>Due Date</TableTh>
          </TableTr>
        </TableThead>
        <TableTbody>{completedRows}</TableTbody>
      </Table>
    </TableScrollContainer>
  );
};
