import React, { use } from "react";
import { Link } from "react-router";

const PostedJobList = ({ jobsCreatedByPromise }) => {
   const jobs = use(jobsCreatedByPromise);

   return (
      <div>
         <h2>Jobs created by you: {jobs?.length}</h2>

         <div>
            {jobs?.length ? (
               <div className="overflow-x-auto border border-gray-200 mt-8">
                  <table className="table">
                     {/* head */}
                     <thead className="bg-gray-100">
                        <tr>
                           <th>No</th>
                           <th>Job Title</th>
                           <th>Job Deadline</th>
                           <th>Application Count</th>
                           <th>View Application</th>
                        </tr>
                     </thead>
                     <tbody>
                        {/* Rows */}
                        {jobs.map((job, index) => (
                           <tr
                              key={job?._id}
                              className="hover:bg-gray-100 group"
                           >
                              <th>{index + 1}</th>
                              <td>{job?.job_title}</td>
                              <td>{job?.deadline}</td>
                              <td>{job?.application_count}</td>
                              <td className="group-hover:text-blue-500 duration-200">
                                 <Link to={`/applications/${job?._id}`}>
                                    Details
                                 </Link>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            ) : (
               ""
            )}
         </div>
      </div>
   );
};

export default PostedJobList;
