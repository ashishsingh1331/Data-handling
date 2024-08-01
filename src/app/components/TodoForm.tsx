"use client";
import { revalidatePath } from "next/cache";
import React, { useRef } from "react";
import { createTodo } from "../actions/createTodoAction";
import SubmitButton from "./SubmitButton";
import { useFormState } from "react-dom";

export default function TodoForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, action] = useFormState(createTodo, { errorMessage: "" });

  return (
    <>
      <div>{error?.errorMessage}</div>
      <form
        action={async (formData) => {
          if (inputRef.current !== null) inputRef.current.value = "";
          await action(formData);
        }}
      >
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" ref={inputRef} />

        <SubmitButton />
      </form>
    </>
  );
}
