import Image from "next/image";

import { Content } from "@/app/content";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center p-24 text-center">
      <Content />
    </main>
  );
}
