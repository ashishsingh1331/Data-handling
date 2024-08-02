import { wait } from "@/api/todos";
import React, { Suspense } from "react";

export default async function DashboardPage() {
  await wait(2000);
  return <h1>Dashboard text</h1>;
}

async function Dashboard() {
  await wait(2000);
  return <h1>Dashboard text</h1>;
}
