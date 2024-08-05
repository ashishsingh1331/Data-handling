import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Link href="/">Home</Link> <Link href="/users">Users</Link>
        {children}
      </body>
    </html>
  );
}
