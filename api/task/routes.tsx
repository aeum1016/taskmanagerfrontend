"use server";

import ITask from '@/enums/Task/ITask';
import { revalidatePath } from 'next/cache';

export async function PurgeTasksCache() {
  revalidatePath('/manager')
}

export async function GetAllTasks() {
  const res = await fetch('http://localhost:8080/task/', { next: { revalidate: 300 } });
  const data: ITask[] = await res.json();

  return data;
}
