import React from "react";
import { useAuth } from "../../../hooks/useAuth";

const CommentForm = () => {
  const { user } = useAuth();
  return (
    <div className="max-w-xl pt-10">
      <h3 className="text-2xl font-semibold mb-4">
        Leave a Comment <span className="text-red-600 text-lg">*</span>{" "}
      </h3>
      <form>
        <div className="flex flex-col md:flex-row  items-center justify-between gap-4">
          <div className="mb-1  lg:w-1/2 w-full">
            <label
              className="block text-gray-700 text-sm font-bold "
              htmlFor="name"
            >
              Full Name <span className="text-red-600 text-lg">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-1 lg:w-1/2 w-full">
            <label
              className="block text-gray-700 text-sm font-bold "
              htmlFor="subject"
            >
              Email <span className="text-red-600 text-lg">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="email"
              placeholder={user?.email}
              className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
              disabled
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold "
            htmlFor="subject"
          >
            Comment <span className="text-red-600 text-lg">*</span>
          </label>
          <textarea
            id="comment"
            name="comment"
            rows="4"
            className="mt-1 block w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 "
            placeholder="Your comment"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
