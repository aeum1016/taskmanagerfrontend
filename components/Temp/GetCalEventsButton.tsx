'use client';

import { FC } from 'react';
import { Button, useMantineTheme } from '@mantine/core';
import { getCalTasks } from '@/app/api/calendar/routes';



export const GetCalEventsButton: FC = (): JSX.Element => {
  const theme = useMantineTheme();

  return (
    <>
      <Button
        color={theme.colors.cyan[7]}
        onClick={() => getCalTasks()}
      >
        Get Cal Tasks
      </Button>
    </>
  );
};
