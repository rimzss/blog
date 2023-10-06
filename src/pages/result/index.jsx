import React from "react";
import Link from "next/link";
import { Tooltip, Avatar } from "@mui/material";

const Result = ({ resultBlogs }) => {
  console.log("RESULT!!!", resultBlogs);
  return (
    <main className="flex flex-col items-center mt-24">
      {resultBlogs.length > 0 ? (
        <>
          <h2 className="text-2xl font-medium">Search Result</h2>
          <article className="md:grid grid-cols-3 gap-5 w-5/6 mt-5">
            {resultBlogs.map((blog) => {
              return (
                <Link key={blog.id} href={"/article/" + blog.id}>
                  <section className="p-3 border-[1px] rounded-lg h-full flex flex-col justify-between mb-5 md:mb-0 hover:bg-secondary50 hover:scale-105 transition-all">
                    <figure>
                      <img
                        className="rounded-md md:w-54 md:h-52 object-cover"
                        src={
                          blog.social_image ? blog.social_image : defaultImage
                        }
                        alt={blog.title}
                      />
                      <div className="bg-[#4b6bfb0d] rounded-md p-1 text-[#4B6BFB] w-14 my-3 text-sm text-center">
                        {blog.type_of}
                      </div>
                      <Tooltip title={blog.title} placement="top-end" arrow>
                        <h1 className="text-xl truncate">{blog.title}</h1>
                      </Tooltip>
                    </figure>

                    <figure className="flex items-center text-hoyr400 text-sm gap-4 mt-5">
                      <Avatar
                        src={blog.user.profile_image}
                        alt={`${blog.user.name} portrait`}
                      />
                      <span>{blog.user.name}</span>
                      <time className="font-light">
                        {blog.readable_publish_date}, 2023
                      </time>
                    </figure>
                  </section>
                </Link>
              );
            })}
          </article>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-medium">
            Nothing Found. Try something else..
          </h2>
        </>
      )}
    </main>
  );
};

export default Result;
