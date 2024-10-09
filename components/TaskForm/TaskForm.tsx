import { FC } from 'react';
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

interface TaskFormProps {
  task?: ITask;
}

export const TaskForm: FC<TaskFormProps> = ({ task }): JSX.Element => {
  const theme = useMantineTheme();

  return (
    <Card className={classes.card} withBorder>
      <Fieldset legend={'Create a task'} radius={'xs'}>
        <TextInput label={'Name'} placeholder={'Task Name'} />
        <Textarea label={'Description'} description={'Any notes'} />
        <Grid>
          <GridCol span={4}>
            <NumberInput label={'Hours'} placeholder={'1 Hour'} min={1} />
          </GridCol>
          <GridCol span={4}>
            <NumberInput
              label={'Priority'}
              placeholder={'No Priority'}
              min={0}
              max={4}
            />
          </GridCol>
          <GridCol span={4}>
            <DateTimePicker label={'Due Date'} placeholder={'Due Date'} />
          </GridCol>
        </Grid>
        <Button mt={16} fullWidth color={theme.colors.green[7]}>
          Submit
        </Button>
      </Fieldset>
    </Card>
  );
};
