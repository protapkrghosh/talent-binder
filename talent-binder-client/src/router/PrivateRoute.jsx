import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
   const location = useLocation();
   const { user, loading } = useContext(AuthContext);

   if (loading) {
      return (
         <div className="flex justify-center items-center min-h-[50vh]">
            <div className="flex justify-center w-96 flex-col gap-4">
               <div className="skeleton h-32 w-full"></div>
               <div className="skeleton h-4 w-28"></div>
               <div className="skeleton h-4 w-full"></div>
               <div className="skeleton h-4 w-full"></div>
            </div>
         </div>
      );
   }

   if (!user) {
      return <Navigate to={"/signin"} state={location.pathname} />;
   }

   return children;
};

export default PrivateRoute;
