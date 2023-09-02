import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Dashboard, Home, Login } from "../pages";
import { NavBar, Footer } from "../components";
import PrivateRoute from "./util/PrivateRoute";

const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
