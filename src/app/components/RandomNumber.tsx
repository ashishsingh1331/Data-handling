import { unstable_noStore } from "next/cache";
import React from "react";

export default function RandomNumber() {
  unstable_noStore();
  return <div>{Math.random()}</div>;
}
