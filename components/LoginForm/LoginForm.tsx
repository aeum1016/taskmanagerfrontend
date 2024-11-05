'use client';

import { FC } from 'react';
import { Button, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { loginUser } from '@/app/api/user/routes';
import ILoginPayload from '@/enums/Auth/ILoginPayload';
import classes from './TaskForm.module.css';

export const LoginForm: FC = (): JSX.Element => {
  const form = useForm<ILoginPayload>({
    mode: 'uncontrolled',
    initialValues: {
      username: '',
      password: '',
    },
  });

  return (
    <form
      action={() => {
        loginUser(form.getValues());
      }}
    >
      <TextInput
        {...form.getInputProps('username')}
        label={'Username'}
        placeholder={'Username'}
      />
      <TextInput
        {...form.getInputProps('password')}
        label={'Password'}
        placeholder={'Password'}
      />
      <Button type={'submit'} mt={16} fullWidth>
        Submit
      </Button>
    </form>
  );
};
