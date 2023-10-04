import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Loader from "./loader";

const Recent = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles/latest?per_page=4");
    const data = await res.json();
    setBlogs(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const defaultImage =
    "https://res.cloudinary.com/practicaldev/image/fetch/s--yH1__SZq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_775/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ytshyt5ieabbodlgx2gr.png";
  return (
    <section className="mt-24  w-5/6 overflow-hidden">
      <h2 className="text-2xl font-medium mb-9">Recent blog post</h2>
      {!isLoading ? (
        <>
          <div className="xl:grid grid-cols-2 grid-rows-2 gap-6 flex flex-col">
            <Link
              className="row-span-2 hover:scale-105 transition-all"
              href={"/article/" + blogs[0].id}
            >
              <img
                className="w-full"
                src={
                  blogs[0].social_image ? blogs[0].social_image : defaultImage
                }
                alt=""
              />
              <p className="text-hoyr400 my-5">
                {blogs[0].readable_publish_date}, 2023
              </p>
              <h2 className="font-medium text-xl my-5">{blogs[0].title}</h2>
              <p className="text-hoyr400 font-light">{blogs[0].description}</p>
            </Link>
            <Link
              className="sm:flex gap-5 hover:scale-105 transition-all"
              href={"/article/" + blogs[1].id}
            >
              <img
                className="sm:w-1/2 object-cover"
                src={
                  blogs[1].social_image ? blogs[1].social_image : defaultImage
                }
                alt=""
              />
              <div>
                <p className="text-hoyr400">
                  {blogs[1].readable_publish_date}, 2023
                </p>
                <h2 className="font-medium text-xl">{blogs[1].title}</h2>
                <p className="text-hoyr400 font-light">
                  {blogs[1].description}
                </p>
              </div>
            </Link>

            <Link
              className="sm:flex gap-5 hover:scale-105 transition-all"
              href={"/article/" + blogs[2].id}
            >
              <img
                className="sm:w-1/2 object-cover"
                src={
                  blogs[2].social_image ? blogs[2].social_image : defaultImage
                }
                alt=""
              />
              <div>
                <p className="text-hoyr400 ">
                  {blogs[2].readable_publish_date}, 2023
                </p>
                <h2 className="font-medium text-xl my-2">{blogs[2].title}</h2>
                <p className="text-hoyr400 font-light">
                  {blogs[2].description}
                </p>
              </div>
            </Link>
          </div>
          <Link
            className="sm:flex gap-5 xl:mt-32 mt-6 hover:scale-105 transition-all"
            href={"/article/" + blogs[3].id}
          >
            <img
              className="sm:w-1/2 object-cover"
              src={blogs[3].social_image ? blogs[3].social_image : defaultImage}
              alt=""
            />
            <div>
              <p className="text-hoyr400 ">
                {blogs[3].readable_publish_date}, 2023
              </p>
              <h2 className="font-medium text-xl my-2">{blogs[3].title}</h2>
              <p className="text-hoyr400 font-light">{blogs[3].description}</p>
            </div>
          </Link>
        </>
      ) : (
        <>
          <Loader />
        </>
      )}

      {/* <Link href="../">
        <div className="md:grid grid-cols-2 gap-4">
          {blogs.map((blog) => {
            return (
              <div className="mb-5 md:mb-0">
                <img
                  className="mb-10"
                  src={blog.social_image ? blog.cover_image : defaultImage}
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
      </Link> */}
    </section>
  );
};

export default Recent;
