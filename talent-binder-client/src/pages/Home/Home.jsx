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
         <Suspense fallback={<p>Loading...</p>}>
            <JobsPost jobsPromise={jobsPromise} />
         </Suspense>
      </div>
   );
};

export default Home;
