import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";

const Post = () => {
  let [blogs, setBlogs] = useState([]);
  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles/?per_page=9");
    const data = await res.json();
    setBlogs(data);
    console.log(data);
  };
  const defaultImage =
    "https://res.cloudinary.com/practicaldev/image/fetch/s--qFXT0XtS--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5hj12o96eaiw96jjrbmw.jpg";
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <article className="grid grid-cols-3 gap-5">
      {blogs.map((blog) => {
        return (
          <>
            <Link href="../">
              <div className="p-3 border-2 rounded-lg h-96 flex flex-col justify-between">
                <div>
                  <img
                    className="rounded-md "
                    src={blog.cover_image ? blog.cover_image : defaultImage}
                    alt={blog.title}
                  />
                  <div className="bg-[#4b6bfb0d] rounded-md p-1 text-[#4B6BFB] w-14 my-3 font-light text-sm text-center">
                    {blog.type_of}
                  </div>
                  <h1 className="text-2xl">{blog.title}</h1>
                </div>

                <div className="flex items-center text-hoyr400 text-sm gap-4">
                  <Avatar
                    src={blog.user.profile_image}
                    alt={`${blog.user.name} portrait`}
                  />
                  <span>{blog.user.name}</span>
                  <span className="font-light">
                    {blog.readable_publish_date}, 2023
                  </span>
                </div>
              </div>
            </Link>
          </>
        );
      })}
    </article>
  );
};

export default Post;
