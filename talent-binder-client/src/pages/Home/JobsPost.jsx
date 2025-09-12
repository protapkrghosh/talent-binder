import { use } from "react";
import JobCard from "./JobCard";

const JobsPost = ({ jobsPromise }) => {
   const jobs = use(jobsPromise);

   return (
      <div>
         <div className="text-center">
            <h2 className="text-[36px] text-secondary font-extrabold">
               Latest Jobs Post
            </h2>
            <p className="text-lg font-medium text-accent md:max-w-lg mx-auto">
               Explore the different types of available jobs to apply discover
               which is right for you.
            </p>
         </div>

         {/* Job details card */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6">
            {jobs.map((job) => (
               <JobCard key={job._id} job={job} />
            ))}
         </div>
      </div>
   );
};

export default JobsPost;
