import React, { use } from "react";
import { Link } from "react-router";

const PostedJobList = ({ jobsCreatedByPromise }) => {
   const jobs = use(jobsCreatedByPromise);

   return (
      <div>
         <h2>Jobs created by you: {jobs?.length}</h2>

         <div>
            <div className="overflow-x-auto">
               <table className="table">
                  {/* head */}
                  <thead>
                     <tr>
                        <th>No</th>
                        <th>Job Title</th>
                        <th>Job Deadline</th>
                        <th>View Application</th>
                     </tr>
                  </thead>
                  <tbody>
                     {/* Rows */}
                     {jobs.map((job, index) => (
                        <tr key={job?._id} className="hover:bg-base-200 group">
                           <th>{index + 1}</th>
                           <td>{job?.job_title}</td>
                           <td>{job?.deadline}</td>
                           <td className="group-hover:text-blue-500 duration-200">
                              <Link to={`/applications/${job?._id}`}>
                                 View Application
                              </Link>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default PostedJobList;
