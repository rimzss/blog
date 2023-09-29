import React from "react";
import Post from "./Post";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";

const Articles = () => {
  return (
    <div className="mt-24 w-5/6">
      <h2 className="text-2xl font-medium">All Blog Post</h2>
      <section className="mt-8">
        <Post />
        <div className="w-5/6 flex justify-center mt-10 mx-auto">
          <Button variant="outlined">Load More</Button>
        </div>
      </section>
    </div>
  );
};

export default Articles;
