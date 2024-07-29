import { getHardcodedTodos, getTodos, revalidatedTodos } from "@/api/todos";

export default async function TestPage() {
  // To test Full route cache
  console.log("Rendering");
  return <div>Test page</div>;
}
