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
      {children}
      {analytics}
      {posts}
    </div>
  );
}
