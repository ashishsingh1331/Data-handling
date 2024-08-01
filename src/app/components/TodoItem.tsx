"use client";
import React, { useTransition } from "react";
import { toggleTodo } from "../actions/createTodoAction";

export default function TodoItem({
  id,
  title,
  completed,
}: {
  id: number;
  title: string;
  completed: boolean;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <li>
      <label>
        <input
          type="checkbox"
          disabled={isPending}
          checked={completed}
          onChange={async (e) => {
            startTransition(async () => {
              await toggleTodo(id, e.target.checked);
            });
          }}
        />
        {title}
      </label>
    </li>
  );
}
