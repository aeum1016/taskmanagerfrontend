'use server';

import { revalidatePath } from 'next/cache';
import ITask from '@/enums/Task/ITask';

export async function PurgeTasksCache() {
  revalidatePath('/manager');
}

export async function GetAllTasks() {
  const res = await fetch('http://localhost:8080/task', {
    next: { revalidate: 300 },
  }).catch((error: Error) => {
    console.error(error.name + ' ' + error.message);
  });

  if (res !== undefined) {
    const data: ITask[] = await res.json();
    return data;
  }
  return [];
}
