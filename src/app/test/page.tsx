import { getHardcodedTodos, getTodos, revalidatedTodos } from "@/api/todos";
import Link from "next/link";

export default async function TestPage() {
  // To test Full route cache
  console.log("Rendering");
  return (
    <div>
      <Link href="/mypage">My page</Link>Test page
    </div>
  );
}
