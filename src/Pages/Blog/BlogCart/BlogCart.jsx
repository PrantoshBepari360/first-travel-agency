import React, { useState } from "react";
import "./BlogCart.css";
import Pagination from "./Pagination/Pagination";
import BlogSideBar from "./BlogSideBar/BlogSideBar";
import { useFetchData } from "./../../../hooks/useFetchData";
import TravelPackagesCard from "../../../components/TravelPackages/TravelPackagesCard";

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
      <h4 className="text-center mt-5 mb-3">
        <span className="">Deal News</span> / View All Promotions
      </h4>

      {currentBlog?.length === 0 && (
        <h2 className="mt-10 text-center text-4xl text-red-700">Loading...</h2>
      )}

      {currentBlog?.length > 0 && (
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-9">
            <br />
            <div className="grid md:grid-cols-2 gap-2">
              {currentBlog?.map((blog) => (
                <TravelPackagesCard key={blog?.id} blog={blog} />
              ))}
            </div>

            <br />
            <Pagination
              blogPage={blogPage}
              totalBlog={packages?.length}
              paginate={paginate}
            />
          </div>
          <div className="col-span-12 lg:col-span-3">
            <BlogSideBar />
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogCart;
