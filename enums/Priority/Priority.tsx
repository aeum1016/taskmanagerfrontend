import { MantineTheme } from '@mantine/core';
import IPriority from './IPriority';

export const LowPriority: IPriority = {
  value: 3,
  text: 'Do Whenever!',
  toString: 'Low Priority',
};

export const MediumPriority: IPriority = {
  value: 2,
  text: 'Do Soon!',
  toString: 'Medium Priority',
};

export const HighPriority: IPriority = {
  value: 1,
  text: 'Do Now!',
  toString: 'High Priority',
};

export const ExtremePriority: IPriority = {
  value: 0,
  text: 'DROP EVERYTHING!',
  toString: 'EXTREMELY HIGH Priority',
};

export const UnknownPriority: IPriority = {
  value: -1,
  text: 'Unknown Priority',
  toString: 'Unknown Priority',
};

export const AllPriorities: IPriority[] = [
  LowPriority,
  MediumPriority,
  HighPriority,
  ExtremePriority,
];

export const numberToPriority = (val: number): IPriority => {
  let foundPriority = AllPriorities.find((element) => element.value === val);
  if (foundPriority !== undefined) return foundPriority;

  return UnknownPriority;
};

export const priorityToColor = (priority: IPriority, theme: MantineTheme): string => {
  switch (priority) {
    case LowPriority:
      return theme.colors.green[7];
    case MediumPriority:
      return theme.colors.orange[7];
    case HighPriority:
      return theme.colors.red[7];
    case ExtremePriority:
      return theme.colors.violet[7];
    default:
      return theme.colors.gray[7];
  }
};
