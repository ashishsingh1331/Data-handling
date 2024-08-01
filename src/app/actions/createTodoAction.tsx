"use server";
import { wait } from "@/api/todos";
import { revalidatePath } from "next/cache";
import React from "react";

//Server action are function runs on the server
export async function createTodo(prevState: unknown, formData: FormData) {
  await wait(2000);

  const title = formData.get("title");

  if (title === "") {
    return { errorMessage: "No title was given" };
  }

  const data = await fetch(`http://localhost:3001/todos`, {
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
