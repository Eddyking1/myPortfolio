import React from "react";
import { Routes, Route } from "react-router-dom";
import WebbApp from "./components/app/index";
import Login from "./components/login/index";
import Form from "./components/form/index";
import Profile from "./components/profile/index";
import Shop from "./components/shop/index";
import SignUp from "./components/signUp/index";
import ProtectedRoute from "./protectedRoute/index"; // Assuming this is the correct import path for the ProtectedRoute component

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WebbApp />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
};

export default AppRoutes;
