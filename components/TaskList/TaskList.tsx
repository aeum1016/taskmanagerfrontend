import dayjs from 'dayjs';
import { FC } from 'react';
import {
  IconChevronCompactDown,
  IconChevronDown,
  IconDropCircle,
} from '@tabler/icons-react';
import {
  Button,
  Card,
  Container,
  Group,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  Pill,
  Select,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { numberToPriority } from '@/enums/Priority/Priority';
import ITask from '@/enums/Task/ITask';
import { TaskListInternal } from './TaskListInternal';
import classes from './TaskList.module.css';

interface TaskListProps {
  tasks: ITask[];
}

export const TaskList: FC<TaskListProps> = ({ tasks }): JSX.Element => {
  const [sortByDueDate, callbacks] = useDisclosure(true);

  const theme = useMantineTheme();

  const dueDates = [
    ...new Set(
      tasks.map((task) => {
        if (task.dueDate === undefined) return 10000000000000;
        return dayjs(task.dueDate).toDate().toLocaleDateString();
      })
    ),
  ]
    .map((date) => dayjs(date).unix())
    .sort((a, b) => a - b)
    .map((unix) => {
      if (unix === 10000000000) return 'No Due Date';
      else
        return dayjs(unix * 1000)
          .toDate()
          .toLocaleDateString();
    });
  const priorities = [...new Set(tasks.map((task) => task.priority))];
  priorities.sort();

  return (
    <Card className={classes.card} withBorder>
      <Stack className={classes.stack} gap={6}>
        <Group justify={'flex-end'}>
          <Menu>
            <MenuTarget>
              <Button
                variant={'outline'}
                size={'xs'}
                className={classes.button}
              >
                {sortByDueDate ? 'Due Date' : 'Priority'}
                <IconChevronDown size={20} />
              </Button>
            </MenuTarget>
            <MenuDropdown>
              <MenuItem onClick={() => callbacks.open()}>Due Date</MenuItem>
              <MenuItem onClick={() => callbacks.close()}>Priority</MenuItem>
            </MenuDropdown>
          </Menu>
        </Group>
        {sortByDueDate
          ? dueDates.map((date) => {
              return (
                <TaskListInternal
                  key={'task-list-internal' + date}
                  title={date}
                  tasks={tasks.filter((task) => {
                    if (task.dueDate === undefined)
                      return date === 'No Due Date';
                    else
                      return (
                        dayjs(task.dueDate).toDate().toLocaleDateString() ===
                        date
                      );
                  })}
                />
              );
            })
          : priorities.map((priority) => {
              return (
                <TaskListInternal
                  key={'task-list-internal' + priority}
                  title={numberToPriority(priority).toString}
                  tasks={tasks.filter((task) => task.priority === priority)}
                />
              );
            })}
      </Stack>
    </Card>
  );
};
