'use client';

import { FC } from 'react';
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Avatar,
  Group,
  useMantineTheme,
} from '@mantine/core';
import { ColorSchemeToggle } from '../Header/ColorSchemeToggle/ColorSchemeToggle';
import { Header } from '../Header/Header';
import classes from './Home.module.css';

export const Home: FC = (): JSX.Element => {
  const theme = useMantineTheme();

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShellHeader>
        <Header />
      </AppShellHeader>
      <AppShellMain>Home Page Main</AppShellMain>
    </AppShell>
  );
};
