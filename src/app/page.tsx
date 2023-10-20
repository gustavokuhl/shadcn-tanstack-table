import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen h-screen flex-col items-center justify-center p-24">
      <Link href="/payments">
        <Button>Payments</Button>
      </Link>
    </main>
  );
}
