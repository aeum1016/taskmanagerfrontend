import ITask from '@/enums/Task/ITask';

export async function GET() {
  const res = await fetch('http://localhost:8080/task/');
  const data: ITask[] = await res.json();

  return Response.json({ data });
}
