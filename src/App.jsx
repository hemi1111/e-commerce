import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./layout/navbar/Navbar";
import HomePage from "./layout/homepage/HomePage";
import Shop from "./layout/pages/Shop";
import Cart from "./layout/pages/Cart";
import ShopByCategory from "./layout/pages/ShopByCategory";
import SingleItem from "./layout/pages/SingleItem";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<Shop />} />

            <Route path="cart" element={<Cart />} />
            <Route
              path="/shop/:shoeCompany/:shoeName/:id/:gender"
              element={<SingleItem />}
            />
            <Route
              path="/shop/category/:gender/:category"
              element={<ShopByCategory />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
