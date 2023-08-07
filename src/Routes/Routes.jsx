import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Book from "../Pages/Home/Book/Book";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/book/:id", // Add a slash before :id
        element: <Book />,
        loader: ({ params }) => {
          // Fetch the place.json data and filter the place based on the id
          return fetch("/place.json")
            .then((res) => res.json())
            .then((data) => data.find((place) => place._id === params.id));
        },
      },
    ],
  },
]);
