import { getHardcodedTodos, getTodos } from "@/api/todos";
export default async function TodoPage() {
  const todo1 = await getTodos();
  const todo2 = await getTodos();

  const hardcodedTodo = await getHardcodedTodos();
  const hardcodedTodo1 = await getHardcodedTodos();

  return <div>Todo count: {todo1.length} </div>;
}
