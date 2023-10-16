import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { revalidatePath } from "next/cache";
import Avatar from "@mui/material/Avatar";

import moment from "moment";
import dateFormatter from "@/utils/dateFormatter";

const BlogDetail = ({ detail }) => {
  const defaultImage =
    "https://res.cloudinary.com/practicaldev/image/fetch/s--yH1__SZq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_775/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ytshyt5ieabbodlgx2gr.png";

  return (
    <article className="flex flex-col items-center">
      <div className="md:w-1/2 w-5/6 py-5 mt-24">
        <h1 className="text-secondary800 text-2xl font-bold">{detail.title}</h1>
        <figure className="flex gap-8 text-secondary500 items-center my-8">
          <Avatar src={detail.user.profile_image} />
          <h2>{detail.user.name}</h2>
          <h3 className="font-thin">
            {/* {dateFormatter(detail.published_at)} */}
            {moment(detail.published_at).format("ll")}
          </h3>
        </figure>
        <img
          className="rounded-lg"
          src={detail.cover_image ? detail.cover_image : defaultImage}
          alt={detail.title}
        />
        <div
          className="text-xl font-light text-secondary600 mt-8 blog-content"
          dangerouslySetInnerHTML={{ __html: detail.body_html }}
        ></div>
      </div>
    </article>
  );
};

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  const detail = await res.json();
  return {
    props: {
      detail,
    },
  };
  revalidate: 10;
}
export async function getStaticPaths() {
  const res = await fetch("https://dev.to/api/articles?per_page=9");
  const articles = await res.json();
  const recentRes = await fetch(
    "https://dev.to/api/articles/latest?per_page=4"
  );
  const recentArticles = await recentRes.json();
  const ids = articles.map((article) => article.id);
  const recentIds = recentArticles.map((article) => article.id);
  ids.concat(recentIds);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: "blocking",
  };
}

export default BlogDetail;
