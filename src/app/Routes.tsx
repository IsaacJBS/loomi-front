import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useAuth } from "../context/auth";

import Login from "../pages/Login";
import Home from "../pages/Home";

function Auth() {
  const { token } = useAuth();
  if (!token) return <Navigate to="/" />;
  return <Outlet />;
}

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Auth />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
