import React, { useState } from "react";
import "./BlogCart.css";
import Pagination from "./Pagination/Pagination";
import BlogSideBar from "./BlogSideBar/BlogSideBar";
import TravelPackagesCard from "../../../components/TravelPackages/TravelPackagesCard";
import { useFetchData } from "./../../../hooks/useFetchData";

const BlogCart = () => {
  const { packages } = useFetchData();
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPage] = useState(4);

  // get current blog page
  const indexOfLastBlog = currentPage * blogPage;
  const indexOfFirstBlog = indexOfLastBlog - blogPage;
  const currentBlog = packages?.slice(indexOfFirstBlog, indexOfLastBlog);
  console.log(currentBlog);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-11/12 mx-auto">
      {/* Rest of your component code */}
      <div className="col-span-12 lg:col-span-9">
        <br />
        {currentBlog.map((blog) => (
  <TravelPackagesCard key={blog.id} item={blog} />
))}
        <br />
        <Pagination
          blogPage={blogPage}
          totalBlog={packages?.length}
          paginate={paginate}
        />
      </div>
      {/* Rest of your component code */}
    </div>
  );
};

export default BlogCart;
