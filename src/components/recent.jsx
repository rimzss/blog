import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Recent = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles/latest?per_page=4");
    const data = await res.json();
    setBlogs(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(blogs[0]);
  return (
    <section className="mt-24 w-5/6">
      <h2 className="text-2xl font-medium">Recent blog post</h2>
      <Link href="../">
        <div className="grid grid-cols-2 gap-4">
          {blogs.map((blog) => {
            return (
              <div>
                <img
                  className="mb-10"
                  src={blog.cover_image}
                  alt={blog.title}
                />
                <span className="text-hoyr400">
                  {blog.readable_publish_date}, 2023
                </span>
                <h1 className="my-4">{blog.title}</h1>
                <p className="text-hoyr400">{blog.description}</p>
              </div>
            );
          })}
        </div>
      </Link>
    </section>
  );
};

export default Recent;
