import { FC } from 'react';
import { Collapse, Text, useMantineTheme } from '@mantine/core';
import classes from './Description.module.css';

interface DescriptionProps {
  description?: string;
  open: boolean;
}

export const Description: FC<DescriptionProps> = ({ description, open }): JSX.Element => {
  return (
    <>
      <Collapse in={open}>
        <Text size={'sm'}>{description}</Text>
      </Collapse>
    </>
  );
};
