import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";

const Search = ({ resultBlogs, setResultBlogs }) => {
  const router = useRouter();
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
      console.log("SEARCHING!!!");
      resultBlogs = [];
      blogs.map((blog) => {
        let title = blog.title.toLowerCase();
        let searchTitle = searchValue.toLowerCase();
        let description = blog.description.toLowerCase();
        let tag = blog.tag_list;
        // OPTION 1
        if (title.includes(searchTitle)) {
          resultBlogs.push(blog);
          setResultBlogs(resultBlogs);
          router.push("/result");
        } else {
          router.push("/result");
          setResultBlogs(resultBlogs);
        }

        // OPTION 2
        if (description.includes(searchTitle) && !resultBlogs.includes(blog)) {
          resultBlogs.push(blog);
          setResultBlogs(resultBlogs);
          router.push("/result");
        } else {
          router.push("/result");
          setResultBlogs(resultBlogs);
        }
        // OPTION 3
        if (tag.includes(searchTitle) && !resultBlogs.includes(blog)) {
          resultBlogs.push(blog);
          setResultBlogs(resultBlogs);
          router.push("/result");
        } else {
          router.push("/result");
          setResultBlogs(resultBlogs);
        }
      });
      setSearchValue("");
    }
  };

  // WHEN CLICK ENTER
  const handleEnter = (key) => {
    if (key.key === "Enter") {
      console.log("ENTER PRESSED!!!");
      search();
    }
  };

  return (
    <div className="flex mx-2 relative">
      <input
        placeholder="Seacrh"
        className="p-2 bg-hoyr100 text rounded-md"
        type="text"
        name=""
        id="searchInput"
        onChange={searching}
        onKeyDown={handleEnter}
        value={searchValue}
      />
      <BiSearch
        onClick={search}
        className=" absolute right-3 scale-125 mt-3 cursor-pointer"
      />
    </div>
  );
};

export default Search;
