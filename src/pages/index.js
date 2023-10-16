import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Recent from "../components/Recent";
import Articles from "../components/Articles";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ blogs, page }) {
  const router = useRouter();
  return (
    <>
      <main className="flex flex-col items-center">
        <Recent />
        <Articles blogs={blogs} page={page} router={router} />
      </main>
    </>
  );
}

// FETCH DATA
export async function getServerSideProps(context) {
  let page = context.query;
  page = page || 9;
  const res = await fetch(`https://dev.to/api/articles/?per_page=${page}`);
  const blogs = await res.json();
  return {
    props: {
      page,
      blogs,
    },
  };
}
