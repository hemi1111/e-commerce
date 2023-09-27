import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./layout/navbar/Navbar";
import HomePage from "./layout/navbar/homepage/HomePage";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
