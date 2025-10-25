import React, { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import PostedJobList from "./PostedJobList";
import { jobsCreatedByPromise } from "../../api/jobsApi";

const MyPostedJobs = () => {
   const { user } = useAuth();

   return (
      <div className="px-6 py-10">
         <div>
            <h2>My Posted Jobs: </h2>

            <Suspense>
               <PostedJobList
                  jobsCreatedByPromise={jobsCreatedByPromise(user?.email)}
               />
            </Suspense>
         </div>
      </div>
   );
};

export default MyPostedJobs;
