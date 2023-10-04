import React, { useState, useEffect } from "react";
import Post from "./Post";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";

const Articles = () => {
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

  return (
    <div className="mt-24 w-5/6">
      <h2 className="text-2xl font-medium">All Blog Post</h2>
      <section className="mt-8">
        <Post blogs={blogs} />
        <div className="w-5/6 flex justify-center mt-10 mx-auto">
          <Button
            onClick={() => setPostNumber(postNumber + 3)}
            variant="outlined"
          >
            Load More
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Articles;
