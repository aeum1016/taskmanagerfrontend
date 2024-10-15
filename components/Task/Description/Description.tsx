"use client";

import { FC } from 'react';
import { Collapse, Text, useMantineTheme } from '@mantine/core';
import classes from './Description.module.css';
import { useDisclosure } from '@mantine/hooks';

interface DescriptionProps {
  description?: string;
}

export const Description: FC<DescriptionProps> = ({ description }): JSX.Element => {
  const theme = useMantineTheme();

  const [open, { toggle }] = useDisclosure(false);

  return (
    <>
      {description ? (
        <Text className={classes.descriptionToggle} c={theme.colors.blue[4]} onClick={toggle}>
          {open ? "less" : "more"}
        </Text>
      ) : null}
      <Collapse in={open}>
        <Text size={'sm'}>{description}</Text>
      </Collapse>
    </>
  );
};
