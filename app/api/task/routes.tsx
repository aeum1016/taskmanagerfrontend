'use server';

import { cookies } from 'next/headers';
import ITask, { IAddTaskPayload } from '@/enums/Task/ITask';

export async function addTask(taskPayload: IAddTaskPayload) {
  const cookieStore = cookies();
  console.log(cookieStore.get('jwt'));

  const res = await fetch('http://localhost:8080/task', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(taskPayload),
  })
    .then(async (response) => {
      const data: ITask[] = await response.json();
      if (response.status != 200)
        throw new Error(response.status.toString() + ' ' + response.statusText);
      else {
        return data;
      }
    })
    .catch((error: Error) => {
      return error;
    });
  return Response.json(res).ok;
}

export async function getTasks() {
  const res = await fetch('http://localhost:8080/task', {
    method: 'GET',
    next: { revalidate: 300 },
    credentials: 'include',
  }).catch((error: Error) => {
    console.log(error.name + ' ' + error.message);
    return undefined;
  });
  if (res !== undefined && res.ok) {
    const data: ITask[] = await res.json();
    return data;
  }
  return [];
}
