import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import Loader from "./loader";

const Post = () => {
  let [blogs, setBlogs] = useState([]);
  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles/?per_page=9");
    const data = await res.json();
    setBlogs(data);
  };
  const defaultImage =
    "https://res.cloudinary.com/practicaldev/image/fetch/s--yH1__SZq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_775/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ytshyt5ieabbodlgx2gr.png";
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <article className="md:grid grid-cols-3 gap-5">
      {blogs ? (
        <>
          {blogs.map((blog) => {
            return (
              <Link key={blog.id} href={"/article/" + blog.id}>
                <div className="p-3 border-[1px] rounded-lg h-full flex flex-col justify-between mb-5 md:mb-0 hover:scale-105 transition-all">
                  <div>
                    <img
                      className="rounded-md md:w-54 md:h-52 object-cover"
                      src={blog.cover_image ? blog.cover_image : defaultImage}
                      alt={blog.title}
                    />
                    <div className="bg-[#4b6bfb0d] rounded-md p-1 text-[#4B6BFB] w-14 my-3 text-sm text-center">
                      {blog.type_of}
                    </div>
                    <h1 className="text-xl">{blog.title}</h1>
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
            );
          })}
        </>
      ) : (
        <>
          <Loader />
        </>
      )}
    </article>
  );
};

export default Post;
