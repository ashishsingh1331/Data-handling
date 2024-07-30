import React from "react";
import GrandChild from "./grandchild";

export default function Child() {
  return (
    <div>
      Child
      <GrandChild />
    </div>
  );
}
