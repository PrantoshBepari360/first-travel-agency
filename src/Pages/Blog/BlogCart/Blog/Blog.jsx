import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blogs }) => {
  return (
    <div className="grid md:grid-cols-2 gap-2">
      {blogs?.map((blog) => (
        <div key={blog?.id} className="w-full border border-gray-900">
          <img
            className="w-full h-60 border border-yellow-500"
            src={blog?.image}
            alt="Blog Image"
          />
          <div className="h-40 bg-gray-900 text-white px-4 py-5">
            <div className="flex justify-between mb-2">
              {}user i {blog?.travel}
              <span className="">{}chat i (3)Comments</span>
            </div>
            <div className=" mb-2">{blog?.name}</div>
            <div className="flex justify-between items-center">
              <h5 className="text-gray-500">Cost: {blog?.price}</h5>

              <Link
                className="px-3 py-2 border rounded-full bg-white text-orange-500 border-orange-500 hover:text-white hover:border-white hover:bg-orange-500"
                to={`/tourDetails/${blog?.id}`}
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
