import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import { motion, useScroll } from "framer-motion";

import Post from "./Post";

const Articles = ({ setPostNumber, postNumber, blogs }) => {
  const { scrollYProgress } = useScroll({
    offset: ["50vh", "80vh"],
  });
  return (
    <div className="mt-24 w-5/6">
      <h2 className="text-2xl font-medium">All Blog Post</h2>
      <motion.div
        style={{ opacity: scrollYProgress }}
        initial={{ y: 300 }}
        whileInView={{
          y: 0,
          transition: { duration: 0.8 },
        }}
        className="mt-8"
      >
        <Post blogs={blogs} />
        <div className="w-5/6 flex justify-center mt-10 mx-auto">
          <Button
            className="text-secondary500 border-secondary500"
            onClick={() => setPostNumber(postNumber + 3)}
            variant="outlined"
          >
            Load More
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Articles;
