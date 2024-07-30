import React from "react";
import Child from "../components/child";
import Link from "next/link";
import MySelect from "../components/MySelect";

export default function ClientPage() {
  return (
    <div>
      <Child />
      <MySelect />
    </div>
  );
}
