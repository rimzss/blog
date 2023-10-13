import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

export default function App({ Component, pageProps }) {
  const [postNumber, setPostNumber] = useState(9);

  let [blogs, setBlogs] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://dev.to/api/articles/?per_page=${postNumber}`
      );
      const data = await res.json();
      setBlogs(data);
      console.log("Data downloaded");
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [postNumber]);
  let [resultBlogs, setResultBlogs] = useState([]);

  // SCROLL BAR
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="fixed top-0 right-0 bottom-0 w-3 h-screen bg-slate-600 origin-[0%]"
        style={{ scaleY: scrollYProgress }}
      />
      <Nav
        blogs={blogs}
        resultBlogs={resultBlogs}
        setResultBlogs={setResultBlogs}
      />
      <Component
        {...pageProps}
        postNumber={postNumber}
        setPostNumber={setPostNumber}
        blogs={blogs}
        resultBlogs={resultBlogs}
      />
      <Footer />
    </>
  );
}
