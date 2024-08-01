"use client";
import React from "react";
import { toggleTodo } from "../actions/createTodoAction";

export default function SelectAllButton({ ids }: { ids: number[] }) {
  return (
    <button
      onClick={async () => {
        await Promise.all(ids.map((id) => toggleTodo(id, true)));
      }}
    >
      SelectAllButton
    </button>
  );
}
