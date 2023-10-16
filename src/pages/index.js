import Image from "next/image";
import Recent from "@/components/Recent";
import { Inter } from "next/font/google";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ blogs }) {
  const [postNumber, setPostNumber] = useState(9);
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

export async function getServerSideProps() {
  const res = await fetch(`https://dev.to/api/articles/?per_page=9`);
  const blogs = await res.json();
  return {
    props: {
      blogs,
    },
  };
}
