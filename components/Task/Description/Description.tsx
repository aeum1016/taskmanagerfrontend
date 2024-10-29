import { FC } from 'react';
import { Text } from '@mantine/core';
import classes from './Description.module.css';

interface DescriptionProps {
  description?: string;
}

export const Description: FC<DescriptionProps> = ({
  description,
}): JSX.Element => {
  return <Text className={classes.descriptionText}>{description}</Text>;
};
