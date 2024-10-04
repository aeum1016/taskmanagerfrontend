import { FC } from 'react';
import { Text, useMantineTheme } from '@mantine/core';
import classes from './Description.module.css';

interface DescriptionToggleProps {
  description?: string;
  toggle: () => void;
}

export const DescriptionToggle: FC<DescriptionToggleProps> = ({
  description,
  toggle,
}): JSX.Element => {
  const theme = useMantineTheme();

  return (
    <>
      {description ? (
        <Text className={classes.descriptionToggle} c={theme.colors.blue[4]} onClick={toggle}>
          more
        </Text>
      ) : null}
    </>
  );
};
