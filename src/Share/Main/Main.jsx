import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../../Pages/Home/Home";
import Contact from "../../Pages/Contact/Contact";
import Footer from "../Footer/Footer";
import PackagesDetails from "../../Pages/Home/TravelPackages/PackagesDetails";


const Main = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/tourDetails/:id" element={<PackagesDetails></PackagesDetails>}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Main;
