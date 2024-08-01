'use server"';
import { revalidatePath } from "next/cache";
import React from "react";

// //Server action are function runs on the server
// export async function createTodo(formData: FormData) {
//   const data = await fetch(`${process.env.API_URL}/todos`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       title: formData.get("title"),
//       completed: false,
//     }),
//   }).then((res) => res.json());
//   revalidatePath("/");
// }
