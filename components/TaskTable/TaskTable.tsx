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
import { GetAllTasks } from '@/api/task/routes';
import ITask from '@/enums/Task/ITask';
import classes from './TaskTable.module.css';

interface TaskTableProps {}

export const TaskTable: FC<
  TaskTableProps
> = async ({}): Promise<JSX.Element> => {
  const tasks: ITask[] = await GetAllTasks();

  const rows = tasks.map((task) => (
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
            <TableTh>Title</TableTh>
            <TableTh>Description</TableTh>
            <TableTh>Priority</TableTh>
            <TableTh>Due Date</TableTh>
          </TableTr>
        </TableThead>
        <TableTbody>{rows}</TableTbody>
      </Table>
    </TableScrollContainer>
  );
};
