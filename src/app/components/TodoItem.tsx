"use client";
import React from "react";
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
  return (
    <li>
      <label>
        <input
          type="checkbox"
          defaultChecked={completed}
          onChange={async (e) => {
            await toggleTodo(id, e.target.checked);
          }}
        />
        {title}
      </label>
    </li>
  );
}
