import { wait } from "@/api/todos";
import React, { Suspense } from "react";

export default function DashboardPage() {
  return (
    <>
      <Suspense fallback={<div>Loading dashboard</div>}>
        <Dashboard />
      </Suspense>
      <Suspense fallback={<div>Loading analytics</div>}>
        <Analytics />
      </Suspense>
      <Suspense fallback={<div>Loading Posts</div>}>
        <Posts />
      </Suspense>
    </>
  );
}

async function Dashboard() {
  await wait(2000);
  return <h1>Dashboard text</h1>;
}

async function Analytics() {
  await wait(3000);
  return <h1>Analytics text</h1>;
}

async function Posts() {
  await wait(1000);
  return <h1>Posts text</h1>;
}
