import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Services from "../../Pages/Services/Services";
import Contact from "../../Pages/Contact/Contact";
import Login from "../../components/Auth/Login";
import Register from "../../components/Auth/Register";
import Footer from "../Footer/Footer";
import PackagesDetails from "../../Pages/Home/TravelPackages/PackagesDetails";
import Blog from "../../Pages/Blog/Blog";
import TourBooking from "../../Pages/Home/TravelPackages/TourBooking";


const Main = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/tourDetails/:id" element={<PackagesDetails />}></Route>
        <Route path="/tourBooking" element={<TourBooking></TourBooking>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Main;
