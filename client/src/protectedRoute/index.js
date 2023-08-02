// protectedRoute/ProtectedRoute.js
import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { Context } from "../contextApi/newIndex.js";

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const [state] = useContext(Context);

  return state.isAuthorized ? (
    <Route {...rest} element={<Element />} />
  ) : (
    <Navigate to="/login" replace={true} /> // Use 'replace' to prevent adding to history
  );
};

export default ProtectedRoute;
