'use client';

import { FC } from 'react';
import { Button, useMantineTheme } from '@mantine/core';
import { createCalEvent } from '@/app/api/calendar/routes';
import dayjs from 'dayjs';

interface CreateEventProps {
}

export const CreateEvent: FC<CreateEventProps> = (): JSX.Element => {
  const theme = useMantineTheme();

  return (
    <>
      <Button
        color={theme.colors.cyan[7]}
        onClick={() =>
          createCalEvent("primary",
            {
              "start": {
                "dateTime": dayjs().format(),
                "timeZone": Intl.DateTimeFormat().resolvedOptions().timeZone,
              },
              "end": {
                "dateTime": dayjs().add(1, "hour").format(),
                "timeZone": Intl.DateTimeFormat().resolvedOptions().timeZone,
              },
              "summary": "Test",
              "description": "Testing description",
              "location": "Test location",
            }
          )}
      >
        Test create event
      </Button>
    </>
  );
};
