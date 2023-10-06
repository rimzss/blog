import Image from "next/image";
import Recent from "@/components/Recent";
import { Inter } from "next/font/google";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ setPostNumber, postNumber, blogs }) {
  // const [postNumber, setPostNumber] = useState(9);

  // let [blogs, setBlogs] = useState([]);
  // const fetchData = async () => {
  //   try {
  //     const res = await fetch(
  //       `https://dev.to/api/articles/?per_page=${postNumber}`
  //     );
  //     const data = await res.json();
  //     setBlogs(data);
  //     console.log("Data downloaded");
  //   } catch (error) {
  //     alert(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, [postNumber]);
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
