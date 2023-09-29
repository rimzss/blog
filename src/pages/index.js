import Image from "next/image";
import Recent from "@/components/Recent";
import { Inter } from "next/font/google";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center">
        <Recent />
        <Articles />
      </main>
      <Footer />
    </>
  );
}
