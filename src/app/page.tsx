import { getTodos } from "@/api/todos";
import { create } from "domain";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { headers } from "next/headers";
import TodoForm from "./components/TodoForm";

export default async function Home({ searchParams }: { searchParams: any }) {
  return (
    <>
      <h1>Homepage</h1>
    </>
  );
}
