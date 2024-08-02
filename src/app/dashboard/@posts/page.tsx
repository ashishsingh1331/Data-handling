import { wait } from "@/api/todos";
import React from "react";

export default async function PostPage() {
  await wait(1000);
  return <h1>Posts text</h1>;
}
