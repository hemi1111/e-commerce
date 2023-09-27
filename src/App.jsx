import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./layout/navbar/Navbar";
import HomePage from "./layout/homepage/HomePage";
import Shop from "./layout/pages/Shop";
import Contact from "./layout/pages/Contact";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<Shop />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
