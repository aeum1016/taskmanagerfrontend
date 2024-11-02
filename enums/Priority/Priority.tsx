import { MantineTheme } from '@mantine/core';
import IPriority from './IPriority';

export const LowPriority: IPriority = {
  value: 3,
  text: '!',
  toString: 'Low Priority',
};

export const MediumPriority: IPriority = {
  value: 2,
  text: '!!',
  toString: 'Medium Priority',
};

export const HighPriority: IPriority = {
  value: 1,
  text: '!!!',
  toString: 'High Priority',
};

export const ExtremePriority: IPriority = {
  value: 0,
  text: '!!!!',
  toString: 'Top Priority',
};

export const UnknownPriority: IPriority = {
  value: 4,
  text: '?',
  toString: 'Unknown Priority',
};

export const AllPriorities: IPriority[] = [
  LowPriority,
  MediumPriority,
  HighPriority,
  ExtremePriority,
];

export const numberToPriority = (val: number | undefined): IPriority => {
  let foundPriority = AllPriorities.find((element) => element.value === val);
  if (foundPriority !== undefined) return foundPriority;

  return UnknownPriority;
};

export const priorityToColor = (
  priority: IPriority,
  theme: MantineTheme
): string => {
  switch (priority) {
    case LowPriority:
      return theme.colors.green[7];
    case MediumPriority:
      return theme.colors.yellow[7];
    case HighPriority:
      return theme.colors.orange[7];
    case ExtremePriority:
      return theme.colors.red[7];
    default:
      return theme.colors.gray[7];
  }
};
