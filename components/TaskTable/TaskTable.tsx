import dayjs from 'dayjs';
import { FC } from 'react';
import {
  Spoiler,
  Table,
  TableScrollContainer,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
} from '@mantine/core';
import { getTasks } from '@/app/api/task/routes';
import ITask from '@/enums/Task/ITask';
import classes from './TaskTable.module.css';
import { filterForCompleted } from '@/enums/Task/TaskSort';

interface TaskTableProps { }

export const TaskTable: FC<
  TaskTableProps
> = async ({ }): Promise<JSX.Element> => {
  const tasks: ITask[] = await getTasks();

  const openTasks = tasks.filter((task) => filterForCompleted(task, false));
  const completedTasks = tasks.filter((task) => filterForCompleted(task, true));

  const openRows = openTasks.map((task) => (
    <TableTr key={task.id}>
      <TableTd className={classes.title}>{task.title}</TableTd>
      <TableTd className={classes.description}>
        <Spoiler maxHeight={22} showLabel={'See more'} hideLabel={'See less'}>
          {task.description}
        </Spoiler>
      </TableTd>
      <TableTd>{task.priority}</TableTd>
      <TableTd>{dayjs(task.duedate).toDate().toLocaleString()}</TableTd>
    </TableTr>
  ));

  const completedRows = completedTasks.map((task) => (
    <TableTr key={task.id}>
      <TableTd className={classes.title}>{task.title}</TableTd>
      <TableTd className={classes.description}>
        <Spoiler maxHeight={22} showLabel={'See more'} hideLabel={'See less'}>
          {task.description}
        </Spoiler>
      </TableTd>
      <TableTd>{task.priority}</TableTd>
      <TableTd>{dayjs(task.duedate).toDate().toLocaleString()}</TableTd>
    </TableTr>
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
