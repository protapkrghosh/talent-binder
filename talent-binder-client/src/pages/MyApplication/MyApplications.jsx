import React, { Suspense } from "react";
import ApplicationList from "./ApplicationList";
import useAuth from "../../hooks/useAuth";
import { myApplicationPromise } from "../../api/applicationApi";

const MyApplications = () => {
   const { user } = useAuth();

   return (
      <div className="my-12">
         <Suspense
            fallback={
               <div className="flex justify-center min-h-[45vh]">
                  <span className="loading loading-dots loading-xl text-primary"></span>
                  <span className="loading loading-dots loading-xl text-primary"></span>
               </div>
            }
         >
            <ApplicationList
               myApplicationPromise={myApplicationPromise(user?.email)}
            />
         </Suspense>
      </div>
   );
};

export default MyApplications;
