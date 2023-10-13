import Image from "next/image";
import Recent from "@/components/Recent";
import { Inter } from "next/font/google";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ setPostNumber, postNumber, blogs }) {
  return (
    <>
      <main className="flex flex-col items-center">
        <Recent />
        <Articles
          postNumber={postNumber}
          setPostNumber={setPostNumber}
          blogs={blogs}
        />
      </main>
    </>
  );
}
