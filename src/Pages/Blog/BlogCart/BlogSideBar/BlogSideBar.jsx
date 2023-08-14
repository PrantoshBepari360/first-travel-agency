import React from "react";

const BlogSideBar = () => {
  return (
    <div>
      <div className="mt-5">
        <h3 className="mb-3">Search Hear</h3>
        <hr />
        <input
          type="text"
          placeholder="Search Tour..."
          className="w-full my-4 p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="categori-list">
        <h2 className="pb-3">Categories</h2>
        <ul className="list-group">
          <li className="border border-b-0 rounded-t px-3 py-2">
            <a href="#!">
              New York City <span className="categori">(20)</span>
            </a>
          </li>
          <li className="border border-b-0 px-3 py-2">
            <a href="#!">
              Adventure Tour <span className="categori">(08)</span>
            </a>
          </li>
          <li className="border border-b-0 px-3 py-2">
            <a href="#!">
              Couple Tour <span className="categori">(18)</span>
            </a>
          </li>
          <li className="border border-b-0 px-3 py-2">
            <a href="#!">
              Village Tour <span className="categori">(21)</span>
            </a>
          </li>
          <li className="border rounded-b px-3 py-2">
            <a href="#!">
              Group Tour <span className="categori">(09)</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="">
        <h2 className="my-3">Popular Post</h2>
        <hr />
        <div className="flex mt-3">
          <div className="mr-3 w-1/4">
            <img src="/" className="w-full" alt="Image" />
          </div>
          <div className="w-3/4">
            <div className="mb-3 f-w">Lake Garda</div>
            <div className="flex">
              <div className="mr-2 w-full f-s">{}L Dina Jems</div>
              <div className="w-full f-s">{}L 21 April, 2021</div>
            </div>
          </div>
        </div>
        <br />
        <div className="flex">
          <div className="me-3 w-1/4">
            <img src="/" className="w-full"  alt="Image" />
          </div>
          <div className="w-3/4">
            <div className="mb-3 f-w">Parish Hill.</div>
            <div className="flex">
              <div className="mr-2 w-full f-s ">{} Dina Jems</div>
              <div className="w-full f-s">{} 12 June, 2021</div>
            </div>
          </div>
        </div>
        <br />
        <div className="flex">
          <div className="mr-3 w-1/4">
            <img src="/" className="w-full"  alt="Image" />
          </div>
          <div className="w-3/4">
            <div className="mb-3 f-w">Mount Dtna.</div>
            <div className="flex">
              <div className="mr-2 w-full f-s">{} Dina Jems</div>
              <div className="w-full f-s">{} 02 sept, 2021</div>
            </div>
          </div>
        </div>
        <br />
        <div className="flex">
          <div className="mr-3 w-1/4">
            <img src="/" className="w-full"  alt="Image" />
          </div>
          <div className="w-3/4">
            <div className="mb-3 f-w">Lake Garda</div>
            <div className="flex">
              <div className="mr-2 w-full f-s">{} Dina Jems</div>
              <div className="w-full f-s">{} 25 Nov, 2021</div>
            </div>
          </div>
        </div>
        <br />
        <div className="flex">
          <div className="me-3 w-1/4">
            <img src="/" className="w-full"  alt="Image" />
          </div>
          <div className="w-3/4">
            <div className="mb-3 f-w ">Franch Rivira</div>
            <div className="flex">
              <div className="mr-2 w-full f-s ">{} Dina Jems</div>
              <div className="w-full f-s">{} 11 Jan, 2022</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="my-3">Tages</h2>
        <hr />
        <ul className="flex flex-wrap tages mt-3">
          <li className="p-2">
            <a href="#!">
              <button className="button">Adventure</button>
            </a>
          </li>
          <li className="p-2">
            <a href="#!">
              <button className="button">Trip</button>
            </a>
          </li>
          <li className="p-2">
            <a href="#!">
              <button className="button">Guided</button>
            </a>
          </li>
          <li className="p-2">
            <a href="#!">
              <button className="button">Historical</button>
            </a>
          </li>
          <li className="p-2">
            <a href="#!">
              <button className="button">Road Trips</button>
            </a>
          </li>
          <li className="p-2">
            <a href="#!">
              <button className="button">Tourist</button>
            </a>
          </li>
          <li className="p-2">
            <a href="#!">
              <button className="button">Cultural</button>
            </a>
          </li>
          <li className="p-2">
            <a href="#!">
              <button className="button">Natural Tour</button>
            </a>
          </li>
          <li className="p-2">
            <a href="#!">
              <button className="button">Journey</button>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="py-3">Gallery</h2>
        <hr />
        <ul className="flex flex-wrap gallery mt-3">
          <li className="p-1">
            <a href="#!">
              <img src="/" className="w-full"  alt="Image" />
            </a>
          </li>
          <li className="p-1">
            <a href="#!">
              <img src={2} className="w-full"  alt="Image" />
            </a>
          </li>
          <li className="p-1">
            <a href="#!">
              <img src={3} className="w-full"  alt="Image" />
            </a>
          </li>
          <li className="p-1">
            <a href="#!">
              <img src={4} className="w-full"  alt="Image" />
            </a>
          </li>
          <li className="p-1">
            <a href="#!">
              <img src={5} className="w-full"  alt="Image" />
            </a>
          </li>
          <li className="p-1">
            <a href="#!">
              <img src={6} className="w-full"  alt="Image" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogSideBar;
