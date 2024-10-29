'use client';

import { notifications } from '@mantine/notifications';
import ITask from '@/enums/Task/ITask';

export async function AddTask(task: ITask) {
  const res = await fetch('http://localhost:8080/task/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  })
    .then(async (response) => {
      const data: ITask[] = await response.json();
      if (response.status != 200)
        throw new Error(response.status.toString() + ' ' + response.statusText);
      else {
        notifications.show({
          title: 'Added Task!',
          message: 'Successfully added a new task.',
          color: 'green',
        });
        return data;
      }
    })
    .catch((error: Error) => {
      notifications.show({ message: error.message, color: 'red' });
      return error;
    });

  return Response.json({ res });
}
