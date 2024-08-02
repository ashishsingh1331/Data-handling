import Link from "next/link";
import React from "react";

export default function DashboardLayout({
  children,
  analytics,
  posts,
}: Readonly<{
  children: React.ReactNode;
  analytics: React.ReactNode;
  posts: React.ReactNode;
}>) {
  return (
    <div>
      <nav>
        <Link href="/dashboard">Dashbaord</Link>
        <Link href="/dashboard/test">Dashbaord test</Link>
      </nav>
      {children}
      {analytics}
      {posts}
    </div>
  );
}
