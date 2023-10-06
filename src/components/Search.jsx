import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";

const Search = ({ resultBlogs, setResultBlogs }) => {
  // DATA DOWNLOADER FUNCTIONS
  let [blogs, setBlogs] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch(`https://dev.to/api/articles`);
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // SEARCH FUNCTIONS
  const [searchValue, setSearchValue] = useState("");
  const searching = (el) => {
    setSearchValue(el.target.value);
  };
  const search = () => {
    if (searchValue) {
      resultBlogs = [];
      blogs.map((blog) => {
        let title = blog.title.toLowerCase();
        let searchTitle = searchValue.toLowerCase();
        if (title.includes(searchTitle)) {
          resultBlogs.push(blog);
          setResultBlogs(resultBlogs);
          console.log(resultBlogs);
        } else {
          setResultBlogs(resultBlogs);
        }
      });
      setSearchValue("");
    }
  };
  return (
    <div className="md:flex hidden">
      <input
        placeholder="Seacrh"
        className="p-2 bg-hoyr100 text rounded-md"
        type="text"
        name=""
        id=""
        onChange={searching}
        value={searchValue}
      />
      <Link href="/result/">
        <BiSearch onClick={search} className="-ml-10 scale-125 mt-3" />
      </Link>
    </div>
  );
};

export default Search;
