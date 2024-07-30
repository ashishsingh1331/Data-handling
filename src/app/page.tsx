import Link from "next/link";
import RandomNumber from "./components/RandomNumber";

export default function Home() {
  return (
    <h1>
      <Link href="/todos">Todos</Link>
      <RandomNumber />
    </h1>
  );
}
