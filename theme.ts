'use client';

import { createTheme, virtualColor } from '@mantine/core';

export const theme = createTheme({
  colors: {
    primaryGreen: [
      '#edf9f0',
      '#e1ece4',
      '#c4d6c9',
      '#a5bfac',
      '#8bab94',
      '#799f84',
      '#709a7b',
      '#5d8569',
      '#51775c',
      '#41674d',
    ],
    secondaryLight: [
      '#f0f4ff',
      '#e2e6f0',
      '#c6cad7',
      '#a7acbd',
      '#8d93a8',
      '#7c839b',
      '#737b96',
      '#616983',
      '#555d77',
      '#47506b',
    ],
    secondaryDark: [
      '#ebf8f2',
      '#e2eae6',
      '#c9d1cd',
      '#adb6b2',
      '#96a09b',
      '#86928c',
      '#7d8b84',
      '#6a7871',
      '#5b6c64',
      '#4a5e54',
    ],
    primary: virtualColor({
      name: 'primary',
      dark: '',
      light: '',
    }),
  },
});
