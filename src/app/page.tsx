import { cookies } from "next/headers";
import { headers } from "next/headers";
export default function Home({ searchParams }: { searchParams: any }) {
  const c = cookies().get("Ashishcookie");

  console.log(c);
  const h = headers().get("User-Agent");
  console.log(h);

  return <h1>Hi</h1>;
}
