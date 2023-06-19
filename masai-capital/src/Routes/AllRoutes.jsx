import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import About from "../Pages/About";
import ProductPage from "../Pages/ProductPage";
import PerformancePage from "../Pages/PerformancePage";
import ContactPage from "../Pages/Contact";
import FormsPage from "../Pages/FormsPage";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/performance" element={<PerformancePage />} />
      <Route path="/Contact" element={<ContactPage />} />
      <Route path="/forms" element={<FormsPage />} />
    </Routes>
  );
};
