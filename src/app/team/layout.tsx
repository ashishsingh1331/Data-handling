import Link from "next/link";
import React from "react";

export default function TeamLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <hr />
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: ".25rem",
          paddingTop: ".25rem",
        }}
      >
        <Link href="/team/1">Team one</Link>
        <Link href="/team/2">Team two</Link>
      </nav>
      {children}
    </>
  );
}
