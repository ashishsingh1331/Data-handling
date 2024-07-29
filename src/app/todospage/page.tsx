import {
  getHardcodedTodos,
  getTodos,
  getTodosTagged,
  revalidatedTodos,
} from "@/api/todos";

export default async function TodoPage() {
  const todo1 = await getTodos();
  const todo2 = await getTodos();

  const todo3 = await revalidatedTodos();
  const todo4 = await getTodosTagged();

  //   const hardcodedTodo = await getHardcodedTodos();
  //   const hardcodedTodo1 = await getHardcodedTodos();

  return (
    <div>
      Todo count: {todo1.length} <p>{todo3.title}</p>
    </div>
  );
}
