import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import Login from "../pages/Login";
import Home from "../pages/Home";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
