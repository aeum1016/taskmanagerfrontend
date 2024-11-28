import { FC } from 'react';
import { Button, useMantineTheme } from '@mantine/core';
import { getCalTasks } from '@/app/api/calendar/routes';



export const GetCalEventsButton: FC = async (): Promise<JSX.Element> => {
  const tasks = await getCalTasks();

  return (
    <>
      <Button>
        Get Cal Tasks
      </Button>
    </>
  );
};
