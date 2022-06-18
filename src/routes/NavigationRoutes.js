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
  Login,
  SignUp,
  Address,
  Checkout,
  Order,
} from "../pages";
import { RequireAuth } from "../component";

export const NavigationRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <Wishlist />
            </RequireAuth>
          }
        />
        <Route
          path="/product/:productId"
          element={
            <RequireAuth>
              <ProductPage />
            </RequireAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/userProfile"
          element={
            <RequireAuth>
              <UserProfile />
            </RequireAuth>
          }
        />
        <Route
          path="/address"
          element={
            <RequireAuth>
              <Address />
            </RequireAuth>
          }
        />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
         <Route
          path="/order"
          element={
            <RequireAuth>
              <Order />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
