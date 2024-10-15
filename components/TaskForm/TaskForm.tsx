'use client';

import { FC, useEffect, useState } from 'react';
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
import { AddTask } from '@/api/task/routes';
import { notifications } from '@mantine/notifications';

interface TaskFormProps {
  task?: ITask;
}

export const TaskForm: FC<TaskFormProps> = ({ task }): JSX.Element => {

  const theme = useMantineTheme()

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      title: "",
      description: "",
      estimatehours: 0,
      priority: 0,
      duedate: dayjs(dayjs().toDate().toLocaleDateString()).toDate()
    }
  })

  const [submittedValues, setSubmittedValues] = useState<typeof form.values | null>(null);

  useEffect(() => {
    if(submittedValues != undefined)
    {
      // find user id
      const userid = "fjlaksjdfas"
      const attemptSubmit = async () => {
        return await AddTask({...submittedValues, completed: false, userid})
      }
      attemptSubmit().catch((error) => {
        notifications.show({
          title: 'Failed',
          message: 'Did not add your task!',
          color: theme.colors.red[7]
        })
      }).then((response) => {
        if(response.status == 200)
        {
          notifications.show({
            title: 'Success',
            message: 'Added your task!',
            color: theme.colors.green[7]
          })
        }
        else
        {
          notifications.show({
            title: 'Failed',
            message: 'Did not add your task!',
            color: theme.colors.red[7]
          })
        }
      })
    }
  }, [submittedValues])

  return (
    <Card className={classes.card} withBorder>
      <form onSubmit={form.onSubmit(setSubmittedValues)}>
        <Fieldset legend={'Create a task'} radius={'xs'}>
          <TextInput {...form.getInputProps('title')} label={'Title'} placeholder={'Task Title'} />
          <Textarea {...form.getInputProps('description')} label={'Description'} description={'Any notes'} />
          <Grid>
            <GridCol span={4}>
              <NumberInput {...form.getInputProps('estimatehours')} label={'Hours'} placeholder={'1 Hour'} min={1} />
            </GridCol>
            <GridCol span={4}>
              <NumberInput
                {...form.getInputProps('priority')}
                label={'Priority'}
                placeholder={'No Priority'}
                min={0}
                max={4}
              />
            </GridCol>
            <GridCol span={4}>
              <DateTimePicker {...form.getInputProps('duedate')} label={'Due Date'} placeholder={'Due Date'} />
            </GridCol>
          </Grid>
          <Button mt={16} fullWidth type={"submit"}>
            Submit
          </Button>
        </Fieldset>
      </form>
    </Card>
  );
};
