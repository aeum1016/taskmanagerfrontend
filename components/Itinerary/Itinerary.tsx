"use client";

import { FC, useEffect, useState } from 'react';
import classes from './Itinerary.module.css';
import { getAllCalTasks } from '@/app/api/calendar/routes';
import { EventPayload } from '@/enums/Calendar/CalendarTypes';
import dayjs from 'dayjs';
import { Box, Grid, GridCol, Stack } from '@mantine/core';
import { Session } from 'next-auth';
import { ItineraryTitle } from './ItineraryTitle/ItineraryTitle';
import { getToday } from '@/util/DateTime/DateTimeFuncs';
import { ItineraryDay } from './ItineraryDay/ItineraryDay';
import { ItineraryCreateButton } from './ItineraryCreateButton/ItineraryCreateButton';

interface ItineraryProps {
  session: Session | null
}

export const Itinerary: FC<ItineraryProps> = ({ session }): JSX.Element => {
  if (session === null) return <></>

  return (
    <Stack className={classes.stack}>
      <Grid className={classes.grid} gutter={0} columns={2}>
        <GridCol className={classes.gridcol} span={1}>
          <ItineraryTitle date={dayjs(getToday())} />
        </GridCol>
        <GridCol className={classes.gridcol} span={1}>
          <ItineraryTitle date={dayjs(getToday()).add(1, 'day')} />
          <Box pt={10}>
            <ItineraryCreateButton date={dayjs(getToday()).add(1, 'day')} />
          </Box>
        </GridCol>
      </Grid>
      <Box className={classes.box}>
        <Grid className={classes.grid} gutter={0} columns={2}>
          <GridCol className={classes.gridcol} span={1}>
            <ItineraryDay date={getToday().toDateString()} />
          </GridCol>
          <GridCol className={classes.gridcol} span={1}>
            <ItineraryDay date={dayjs(getToday()).add(1, 'day').toDate().toDateString()} />
          </GridCol>
        </Grid>
      </Box>
    </Stack>
  );
};
