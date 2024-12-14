import { FC } from 'react';
import { Button, ButtonProps } from '@mantine/core';
import classes from './MyButton.module.css';

interface MyButtonProps extends ButtonProps {}

const MyButton: FC<MyButtonProps> = ({ children }) => {
  return <Button className={classes.standard}>{children}</Button>;
};

export default MyButton;
