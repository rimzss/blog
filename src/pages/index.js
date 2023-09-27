import Image from "next/image";
import Recent from "@/components/recent";
import { Inter } from "next/font/google";
import Articles from "@/components/articles";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Recent />
      <Articles />
    </main>
  );
}
