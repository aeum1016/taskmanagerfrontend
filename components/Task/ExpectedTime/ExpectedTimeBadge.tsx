import { FC } from 'react';
import { Badge, Container, Text } from '@mantine/core';
import taskClasses from '../Task.module.css';
import classes from './ExpectedTimeBadge.module.css';

interface ExpectedTimeProps {
  expectation?: number;
}

export const ExpectedTimeBadge: FC<ExpectedTimeProps> = ({
  expectation,
}): JSX.Element => {
  return (
    <>
      {expectation ? (
        <Badge
          className={`${taskClasses.badge} ${classes.expectationBadge}`}
          variant={'light'}
        >
          <Text className={classes.expectationText}>{expectation} Hours</Text>
        </Badge>
      ) : (
        <Container className={classes.expectationBadge} />
      )}
    </>
  );
};
