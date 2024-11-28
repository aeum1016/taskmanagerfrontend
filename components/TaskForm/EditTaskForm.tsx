'use client';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'
import { FC } from 'react';
import {
  Button,
  Grid,
  GridCol,
  NumberInput,
  Textarea,
  TextInput,
} from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { updateTask } from '@/app/api/task/routes';
import ITask, { IUpdateTaskPayload } from '@/enums/Task/ITask';
import classes from './TaskForm.module.css';

interface EditTaskFormProps {
  task: ITask
  close: () => void;
}

export const EditTaskForm: FC<EditTaskFormProps> = ({ task, close }): JSX.Element => {
  dayjs.extend(utc)

  const form = useForm<IUpdateTaskPayload>({
    mode: 'uncontrolled',
    initialValues: {
      id: task.id,
      title: task.title,
      description: task.description,
      estimatehours: task.estimatehours,
      priority: task.priority,
      duedate: dayjs(task.duedate).toDate(),
    },
  });

  return (
    <form
      action={() => {
        updateTask(form.getValues());
        close();
      }}
    >
      <TextInput
        {...form.getInputProps('title')}
        label={'Title'}
        placeholder={'Task Title'}
      />
      <Textarea
        {...form.getInputProps('description')}
        label={'Description'}
        description={'Any notes'}
      />
      <Grid>
        <GridCol span={6}>
          <NumberInput
            {...form.getInputProps('estimatehours')}
            label={'Estimated Hours'}
            min={0}
          />
        </GridCol>
        <GridCol span={6}>
          <NumberInput
            {...form.getInputProps('priority')}
            label={'Priority'}
            min={0}
            max={4}
          />
        </GridCol>
      </Grid>
      <DateTimePicker {...form.getInputProps('duedate')} label={'Due Date'} valueFormat="MM/DD/YYYY hh:mm A" />
      <Button type={'submit'} mt={16} fullWidth>
        Submit
      </Button>
    </form>
  );
};
