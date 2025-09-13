import React from "react";
import Banner from "./Banner";
import JobsPost from "./JobsPost";
import { Suspense } from "react";

const Home = () => {
   const jobsPromise = fetch(`${import.meta.env.VITE_BASE_URL}/jobs`).then(
      (res) => res.json()
   );

   return (
      <div>
         <Banner />
         <Suspense
            fallback={
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 min-h-[50vh] my-16">
                  {[1, 2, 3, 4, 5, 6].map((item, idx) => (
                     <div
                        key={idx}
                        className="flex justify-center w-96 flex-col gap-4"
                     >
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                     </div>
                  ))}
               </div>
            }
         >
            <JobsPost jobsPromise={jobsPromise} />
         </Suspense>
      </div>
   );
};

export default Home;
