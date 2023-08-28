import React, { useRef, useState } from "react";
import "./BlogCart.css";
import Pagination from "./Pagination/Pagination";
import BlogSideBar from "./BlogSideBar/BlogSideBar";
import { useFetchData } from "./../../../hooks/useFetchData";
import PackagesCard from "../../../reuse/PackagesCard";
import SpinnerLoader from "../../../Share/Loader/SpinnerLoader";

const BlogCart = () => {
  const packages = useFetchData("/TravelPackages.json", (data) =>
    data.map((item) => ({
      id: item.id,
      title: item.title,
      reviewPeople: item.reviewPeople,
      name: item.name,
      review: item.review,
      image: item.image,
    }))
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPage] = useState(4);

  // get current blog page
  const indexOfLastBlog = currentPage * blogPage;
  const indexOfFirstBlog = indexOfLastBlog - blogPage;
  const currentBlog = packages.data?.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-11/12 mx-auto py-10">
      <h4 className="text-center mb-3">
        <span className="">Deal News</span> / View All Promotions
      </h4>

      {packages.loading && <SpinnerLoader />}
      {packages.error && <h3>{packages.error}</h3>}

      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-9">
          <br />
          <div className="grid md:grid-cols-2 gap-2">
            {currentBlog?.map((blog) => (
              <PackagesCard
                key={blog.id}
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
            totalBlog={packages.data?.length}
            paginate={paginate}
          />
        </div>
        <div className="col-span-12 lg:col-span-3">
          <BlogSideBar />
        </div>
      </div>
    </div>
  );
};

export default BlogCart;
