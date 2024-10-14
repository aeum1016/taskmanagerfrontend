'use client';

import { IconMoonFilled, IconSunFilled } from '@tabler/icons-react';
import {
  ActionIcon,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import classes from './ColorSchemeToggle.module.css';

export function ColorSchemeToggle() {
  const theme = useMantineTheme();
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon onClick={() => toggleColorScheme()} variant={'transparent'}>
      <IconSunFilled className={classes.light} color={theme.colors.yellow[0]} />
      <IconMoonFilled className={classes.dark} color={theme.colors.blue[9]} />
    </ActionIcon>
  );
}
