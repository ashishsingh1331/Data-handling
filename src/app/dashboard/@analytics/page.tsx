import { wait } from "@/api/todos";
import React from "react";

export default async function AnalyticsPage() {
  await wait(3000);
  return <h1>Analytics text</h1>;
}
