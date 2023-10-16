import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

export default function App({ Component, pageProps }) {
  let [resultBlogs, setResultBlogs] = useState([]);

  // SCROLL BAR
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="fixed top-0 right-0 bottom-0 w-3 h-screen bg-slate-600 origin-[0%]"
        style={{ scaleY: scrollYProgress }}
      />
      <Nav resultBlogs={resultBlogs} setResultBlogs={setResultBlogs} />
      <Component {...pageProps} resultBlogs={resultBlogs} />
      <Footer />
    </>
  );
}
