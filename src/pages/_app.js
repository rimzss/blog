import "@/styles/globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

export default function App({ Component, pageProps }) {
  let [resultBlogs, setResultBlogs] = useState([]);

  // SCROLL BAR PROGRESS
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* SCROLL BAR */}
      <div className="w-3 h-screen fixed top-0 right-0 bg-gray-300">
        <motion.div
          className="fixed top-0 right-0 bottom-0 w-3 h-screen bg-gray-400 origin-[0%]"
          style={{ scaleY: scrollYProgress }}
        />
      </div>

      <Nav resultBlogs={resultBlogs} setResultBlogs={setResultBlogs} />
      <Component {...pageProps} resultBlogs={resultBlogs} />
      <Footer />
    </>
  );
}
