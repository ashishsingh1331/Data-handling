import React, { ReactNode } from "react";
// Template remount again when respective route change
export default function TeamTemplate({ children }: { children: ReactNode }) {
  return (
    <>
      <p>Template</p>
      {children}
    </>
  );
}
