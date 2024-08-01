"use client";
import React, { useOptimistic, useTransition } from "react";
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
  const [optimisticCompleted, setOptimisticCompleted] =
    useOptimistic(completed);

  return (
    <li>
      <label>
        <input
          type="checkbox"
          disabled={isPending}
          checked={optimisticCompleted}
          onChange={async (e) => {
            startTransition(async () => {
              setOptimisticCompleted(e.target.checked);
              await toggleTodo(id, e.target.checked);
            });
          }}
        />
        {title}
      </label>
    </li>
  );
}
