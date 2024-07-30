import { getTodo, getTodos } from "@/api/todos";

// Prerender the blogs whose id we know , same like gatsby

export async function generateStaticParams() {
  const todos = await getTodos();
  return todos.map((todo) => {
    return {
      todoId: todo.id.toString(),
    };
  });
}

export default async function TodoDetail({ params: { todoId } }: any) {
  const todo = await getTodo(todoId);
  console.log(todo.id);
  return <h1>Todo: {todo.title}</h1>;
}
