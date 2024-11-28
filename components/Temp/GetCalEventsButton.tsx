import { FC } from 'react';
import { Button } from '@mantine/core';
import { getFreeBusy } from '@/app/api/calendar/routes';
import { getFreeHours } from '@/enums/Calendar/CalendarFuncs';

export const GetCalEventsButton: FC = async (): Promise<JSX.Element> => {
  const busyPeriods = await getFreeBusy();
  const freePeriods = getFreeHours(busyPeriods);

  return (
    <>
      <Button>
        Get Cal Tasks
      </Button>
    </>
  );
};
