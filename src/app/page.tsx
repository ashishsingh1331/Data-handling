import { getTodos } from "@/api/todos";
import { create } from "domain";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { headers } from "next/headers";
import TodoForm from "./components/TodoForm";
type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

//Server action are function runs on the server
async function createTodo(formData: FormData) {
  "use server";
  console.log(formData.get("title"));

  const data = await fetch(`${process.env.API_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: formData.get("title"),
      completed: false,
    }),
  }).then((res) => res.json());
  revalidatePath("/");
}

export default async function Home({ searchParams }: { searchParams: any }) {
  const todos = await getTodos();
  console.log(todos);
  return (
    <>
      <h1>Todo List</h1>
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
