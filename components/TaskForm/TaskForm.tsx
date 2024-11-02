'use client';

import dayjs from 'dayjs';
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import {
  Button,
  Card,
  Fieldset,
  Grid,
  GridCol,
  NumberInput,
  Textarea,
  TextInput,
} from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { AddTask } from '@/api/task/clientRoutes';
import { PurgeTasksCache } from '@/api/task/routes';
import ITask from '@/enums/Task/ITask';
import classes from './TaskForm.module.css';

interface TaskFormProps {
  task?: ITask;
  close: () => void;
}

export const TaskForm: FC<TaskFormProps> = ({ task, close }): JSX.Element => {
  const router = useRouter();

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      title: task ? task.title : '',
      description: task ? task.description : '',
      estimatehours: task ? task.estimatehours : 0,
      priority: task ? task.priority : 0,
      duedate: task
        ? dayjs(task.duedate).toDate()
        : dayjs(dayjs().add(1, 'day').toDate().toDateString())
            .subtract(1, 'minute')
            .toDate(),
    },
  });

  return (
    <Fieldset radius={'xs'}>
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
            min={1}
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
      <DateTimePicker {...form.getInputProps('duedate')} label={'Due Date'} />
      <Button
        mt={16}
        fullWidth
        onClick={() => {
          AddTask({
            ...form.getValues(),
            userid: 'c080e1c2-13ca-492e-8a63-d217eef353c4',
            completed: false,
            id: '',
            tags: [],
          });
          close();
          router.refresh();
        }}
      >
        Submit
      </Button>
    </Fieldset>
  );
};
