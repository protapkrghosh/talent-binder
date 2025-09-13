import React from "react";
import { useLoaderData } from "react-router";

const JobsDetails = () => {
   const job = useLoaderData();
   console.log(job);

   return <div></div>;
};

export default JobsDetails;
