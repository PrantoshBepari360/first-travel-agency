import React, { useState } from "react";
import "./BlogCart.css";
import Pagination from "./Pagination/Pagination";
import BlogSideBar from "./BlogSideBar/BlogSideBar";
import { useFetchData } from "./../../../hooks/useFetchData";
import PackagesCard from "../../../reuse/PackagesCard";
import SpinnerLoader from "../../../Share/Loader/SpinnerLoader";

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
    <div className="w-11/12 mx-auto py-10">
      <h4 className="text-center font-bold text-xl mb-3">
        <span>Deal News</span> / View All Promotions
      </h4>

      {currentBlog?.length === 0 && <SpinnerLoader />}

      {currentBlog?.length > 0 && (
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-9">
            <br />
            <div className="grid md:grid-cols-2 gap-2">
              {currentBlog?.map((blog) => (
                <PackagesCard
                  id={blog.id}
                  title={blog.title}
                  reviewPeople={blog.reviewPeople}
                  name={blog.name}
                  review={blog.review}
                  image={blog.image}
                />
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
