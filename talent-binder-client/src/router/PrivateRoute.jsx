import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
   const { user } = useContext(AuthContext);

   if (!user) {
      return <Navigate to={"/signin"} />;
   }

   return { children };
};

export default PrivateRoute;
