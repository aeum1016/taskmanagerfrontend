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
import { addTask } from '@/app/api/task/routes';
import { IAddTaskPayload } from '@/enums/Task/ITask';
import classes from './TaskForm.module.css';

interface TaskFormProps {
  close: () => void;
}

export const TaskForm: FC<TaskFormProps> = ({ close }): JSX.Element => {
  dayjs.extend(utc)
  const form = useForm<IAddTaskPayload>({
    mode: 'uncontrolled',
    initialValues: {
      title: '',
      description: '',
      estimatehours: 0,
      priority: 0,
      duedate: dayjs(dayjs().toDate().toDateString())
        .add(1, 'day')
        .subtract(1, 'minute')
        .toDate(),
    },
  });

  return (
    <form
      action={() => {
        addTask(form.getValues());
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
      <DateTimePicker {...form.getInputProps('duedate')} label={'Due Date'} valueFormat="MM/DD/YYYY hh:mm A" />
      <Button type={'submit'} mt={16} fullWidth>
        Submit
      </Button>
    </form>
  );
};
