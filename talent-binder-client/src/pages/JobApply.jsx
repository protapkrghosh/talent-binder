import React from "react";
import { useParams } from "react-router";
import useAuth from "../hooks/useAuth";

const JobApply = () => {
   const { id: jobId } = useParams();
   const { user } = useAuth();
   console.log(user);

   return (
      <div>
         <h3>Apply Job</h3>
      </div>
   );
};

export default JobApply;
