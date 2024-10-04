'use client';

import { IconMoonFilled, IconSunFilled } from '@tabler/icons-react';
import { ActionIcon, useMantineColorScheme, useMantineTheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const theme = useMantineTheme();
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      onClick={() => {
        if (colorScheme === 'dark') setColorScheme('light');
        else setColorScheme('dark');
      }}
      variant={'transparent'}
    >
      {colorScheme === 'dark' ? (
        <IconSunFilled color={theme.colors.yellow[0]} />
      ) : (
        <IconMoonFilled color={theme.colors.blue[9]} />
      )}
    </ActionIcon>
  );
}
