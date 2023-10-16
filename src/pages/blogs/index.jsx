import Articles from "../components/Articles";
import React from "react";

const blogPage = ({ blogs }) => {
  return (
    <main className="flex flex-col items-center">
      <Articles blogs={blogs} />
    </main>
  );
};

export default blogPage;

export async function getServerSideProps() {
  const res = await fetch(`https://dev.to/api/articles/?per_page=9`);
  const blogs = await res.json();
  return {
    props: {
      blogs,
    },
  };
}
