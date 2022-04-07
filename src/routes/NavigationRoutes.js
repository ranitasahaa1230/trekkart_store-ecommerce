import React from "react";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import {
  Cart,
  Home,
  NotFound,
  Products,
  ProductPage,
  UserProfile,
  Wishlist,
} from "../pages";
import { Login, SignUp } from "../pages/Auth";

export const NavigationRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
