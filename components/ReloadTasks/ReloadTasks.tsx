'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { IconReload } from '@tabler/icons-react';
import { ActionIcon, useMantineTheme } from '@mantine/core';
import classes from './ReloadTasks.module.css';

export const ReloadTasks: FC = (): JSX.Element => {
  const theme = useMantineTheme();
  const router = useRouter();

  return (
    <ActionIcon
      className={classes.button}
      color={theme.colors.cyan[7]}
      onClick={() => {
        router.refresh();
      }}
    >
      <IconReload className={classes.icon} />
    </ActionIcon>
  );
};
