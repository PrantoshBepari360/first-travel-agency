import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Tours from "../../Pages/Tours/Tours";
import Shop from "../../Pages/Shop/Shop";
import Register from "../../login/Register";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import PackagesDetails from "../../components/TravelPackages/PackagesDetails";
import TourBooking from "../../components/TravelPackages/TourBooking";
import Login from "../../login/Login";

const Main = () => {
  return (
    <>
      <Header />
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/tours" element={<Tours />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/element" element={<Element />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/tourDetails/:id" element={<PackagesDetails />}></Route>
        <Route
          path="/tourBooking"
          element={<TourBooking />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Main;
