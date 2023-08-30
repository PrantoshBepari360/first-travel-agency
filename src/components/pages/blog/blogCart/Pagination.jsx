import React from "react";

const Pagination = ({ blogPage, totalBlog, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBlog / blogPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="px-4 py-3 flex items-center justify-center border-t border-gray-200">
        {pageNumbers.map((number) => (
          <li key={number} className="mr-1">
            <a
              onClick={() => paginate(number)}
              href="#!"
              className="px-3 py-2 border rounded text-blue-500 hover:bg-gray-200"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
