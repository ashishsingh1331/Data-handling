import { cache } from "react";
import "server-only";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export async function getTodos() {
  await wait(2000);
  return fetch(`${process.env.API_URL}/todos`)
    .then((res) => res.json())
    .then((data) => data as Todo[]);
}

export async function getTodo(todoId: string) {
  await wait(2000);
  return fetch(`${process.env.API_URL}/todos/${todoId}`)
    .then((res) => res.json())
    .then((data) => data as Todo);
}

export async function getTodosTagged() {
  await wait(2000);
  return fetch(`${process.env.API_URL}/todos/3`, {
    next: { tags: ["Todo", "1"] },
  })
    .then((res) => res.json())
    .then((data) => data as Todo[]);
}

export async function revalidatedTodos() {
  await wait(2000);
  // Revalidate after each 10 seconds
  return fetch(`${process.env.API_URL}/todos/2`, { next: { revalidate: 10 } })
    .then((res) => res.json())
    .then((data) => data as Todo[]);
}

export async function getUserTodos(userId: string) {
  await wait(2000);
  return fetch(`${process.env.API_URL}/todos?userId=${userId}`)
    .then((res) => res.json())
    .then((data) => data as Todo[]);
}

export const getHardcodedTodos = cache(() => {
  console.log("Getting hardcoded todo");
  return new Promise((resolve) => {
    resolve({ id: "abc", title: "hardcoded", completed: true });
  });
});

function wait(duration: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
