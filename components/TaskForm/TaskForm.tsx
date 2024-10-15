'use client';

import { FC, useEffect } from 'react';
import {
  Button,
  Card,
  Fieldset,
  Grid,
  GridCol,
  NumberInput,
  Textarea,
  TextInput,
  useMantineTheme,
} from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import ITask from '@/enums/Task/ITask';
import classes from './TaskForm.module.css';
import { useForm } from '@mantine/form';
import dayjs from 'dayjs';
import { AddTask } from '@/api/task/clientRoutes';

interface TaskFormProps {
  task?: ITask;
}

export const TaskForm: FC<TaskFormProps> = ({ task }): JSX.Element => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      title: task ? task.title : "",
      description: task ? task.description : "",
      estimatehours: task ? task.estimatehours : 0,
      priority: task ? task.priority : 0,
      duedate: task ? dayjs(task.duedate).toDate() : dayjs(dayjs().add(1, 'day').toDate().toDateString()).subtract(1, 'minute').toDate()
    },
  })

  return (
    <Card className={classes.card} withBorder>
      <Fieldset legend={'Create a task'} radius={'xs'}>
        <TextInput {...form.getInputProps('title')} label={'Title'} placeholder={'Task Title'} />
        <Textarea {...form.getInputProps('description')} label={'Description'} description={'Any notes'} />
        <Grid>
          <GridCol span={6}>
            <NumberInput {...form.getInputProps('estimatehours')} label={'Estimated Hours'} min={1} />
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
        <Button mt={16} fullWidth onClick={() => AddTask({ ...form.getValues(), userid: "123456", completed: false })} >
          Submit
        </Button>
      </Fieldset>
    </Card >
  );
};
