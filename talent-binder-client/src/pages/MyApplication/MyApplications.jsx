import React, { Suspense } from "react";
import ApplicationList from "./ApplicationList";

const MyApplications = () => {
   return (
      <div>
         <Suspense
            fallback={
               <div className="flex justify-center min-h-[40vh]">
                  <span className="loading loading-dots loading-xl text-primary"></span>
                  <span className="loading loading-dots loading-xl text-primary"></span>
               </div>
            }
         >
            <ApplicationList />
         </Suspense>
      </div>
   );
};

export default MyApplications;
