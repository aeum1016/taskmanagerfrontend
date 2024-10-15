import ITask from '@/enums/Task/ITask';

export async function GetAllTasks() {
  const res = await fetch('http://localhost:8080/task/', {next: {revalidate: 300}});
  const data: ITask[] = await res.json();

  return Response.json({ data });
}

export async function AddTask(task: ITask) {
  const res = await fetch('http://localhost:8080/task/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  }).catch((error) => {
    return error;
  })
  return res;
}
