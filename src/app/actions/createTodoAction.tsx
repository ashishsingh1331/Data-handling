"use server";
import { revalidatePath } from "next/cache";
import React from "react";

// //Server action are function runs on the server
export async function createTodo(formData: FormData) {
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

export async function toggleTodo(id: number, completed: boolean) {
  await wait(2000);
  const data = await fetch(`http://localhost:3001/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      completed,
    }),
  }).then((res) => res.json());
  revalidatePath("/");
}

async function wait(duration: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
