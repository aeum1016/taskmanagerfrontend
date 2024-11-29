"use client";

import { FC } from "react";
import ITask from "@/enums/Task/ITask";
import { Spoiler, TableTd, TableTr } from "@mantine/core";
import { DateString } from "../DateString/DateString";
import { EditTaskButton } from "@/components/TaskButton/EditTask/EditTaskButton";
import { CompletedButton } from "@/components/TaskButton/CompleteTask/CompletedButton";

import classes from "./TableRows.module.css"

interface TableRowsProps {
  task: ITask
}

export const TableRows: FC<TableRowsProps> = ({ task }) => {
  return (
    <TableTr key={task.id}>
      <TableTd className={classes.title}>{task.title}</TableTd>
      <TableTd className={classes.description}>
        <Spoiler maxHeight={22} showLabel={'See more'} hideLabel={'See less'}>
          {task.description}
        </Spoiler>
      </TableTd>
      <TableTd>{task.priority}</TableTd>
      <TableTd><DateString date={task.duedate} /></TableTd>
      <TableTd><EditTaskButton task={task} /></TableTd>
      <TableTd><CompletedButton task={task} fullWidth={false} /></TableTd>
    </TableTr>
  )
}