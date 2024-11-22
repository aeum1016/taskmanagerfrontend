'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import ITask, { IAddTaskPayload, IUpdateTaskPayload } from '@/enums/Task/ITask';

export async function reloadTasks() {
  revalidatePath('/manager');
}

export async function updateTask(updatedTask: IUpdateTaskPayload) {
  const cookieStore = cookies();

  const res = await fetch('http://localhost:8080/task', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Cookie: cookieStore.toString(),
    },
    credentials: 'include',
    body: JSON.stringify(updatedTask),
  })
    .then(async (response) => {
      const data: ITask = await response.json();
      if (response.status != 200) {
        console.log(data);
        throw new Error(response.status.toString() + ' ' + response.statusText);
      } else {
        return data;
      }
    })
    .catch((error: Error) => {
      return error;
    });
  return Response.json(res).ok;
}

export async function addTask(taskPayload: IAddTaskPayload) {
  const cookieStore = cookies();

  const res = await fetch('http://localhost:8080/task', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Cookie: cookieStore.toString(),
    },
    credentials: 'include',
    body: JSON.stringify(taskPayload),
  })
    .then(async (response) => {
      const data: ITask[] = await response.json();
      if (response.status != 200) {
        console.log(data);
        throw new Error(response.status.toString() + ' ' + response.statusText);
      } else {
        return data;
      }
    })
    .catch((error: Error) => {
      return error;
    });
  return Response.json(res).ok;
}

export async function getTasks() {
  const cookieStore = cookies();

  const res = await fetch('http://localhost:8080/task', {
    method: 'GET',
    headers: {
      Cookie: cookieStore.toString(),
    },
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
