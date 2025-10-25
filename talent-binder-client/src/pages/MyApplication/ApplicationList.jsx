import { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationList = ({ myApplicationPromise }) => {
   const applications = use(myApplicationPromise);

   return (
      <div className="overflow-x-auto border border-gray-200 mt-8 mx-6">
         <table className="table">
            {/* Table head */}
            <thead className="bg-gray-100">
               <tr>
                  <th>No</th>
                  <th>Company Info</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
               </tr>
            </thead>

            <tbody>
               {(applications || []).map((application, index) => (
                  <JobApplicationRow
                     key={application?._id}
                     index={index}
                     application={application}
                  />
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default ApplicationList;
