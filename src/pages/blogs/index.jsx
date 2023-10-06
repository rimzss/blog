import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Articles from "@/components/Articles";
import React from "react";

const blogPage = ({ setPostNumber, postNumber, blogs }) => {
  return (
    <main className="flex flex-col items-center">
      <Articles
        postNumber={postNumber}
        setPostNumber={setPostNumber}
        blogs={blogs}
      />
    </main>
  );
};

export default blogPage;
