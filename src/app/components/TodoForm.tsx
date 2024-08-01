"use client";
import { revalidatePath } from "next/cache";
import React, { useRef } from "react";
import { createTodo } from "../actions/createTodoAction";

export default function TodoForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      action={async (formData) => {
        console.log(formData);
        if (inputRef.current !== null) inputRef.current.value = "";
        await createTodo(formData);
      }}
    >
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" ref={inputRef} />
      <button>Add</button>
    </form>
  );
}
