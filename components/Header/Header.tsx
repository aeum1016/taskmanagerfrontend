import { FC } from 'react';
import { IconUserCircle } from '@tabler/icons-react';
import { ActionIcon, Group, Title } from '@mantine/core';
import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle';
import { UserIcon } from './UserIcon/UserIcon';
import classes from './Header.module.css';

export const Header: FC = (): JSX.Element => {
  return (
    <Group className={classes.headerContainer} gap={0}>
      <Group pl={10}>
        <Title>Tasks</Title>
      </Group>
      <Group pr={10} gap={6}>
        <UserIcon />
        <ColorSchemeToggle />
      </Group>
    </Group>
  );
};
