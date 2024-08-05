import { createTodo, getTodos } from "@/api/todos";
import { NextRequest } from "next/server";

export async function GET() {
  const todos = await getTodos();
  return Response.json(todos);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const todo = await createTodo(body);
  return Response.json(todo);
}
