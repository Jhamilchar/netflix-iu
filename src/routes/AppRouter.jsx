import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Watch from "../pages/watch/Watch";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="watch" element={<Watch />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="browse" element={<Home />} />
        <Route path="/" element={<Navigate to="register" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
