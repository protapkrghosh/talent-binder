import { useLoaderData, useParams } from "react-router";

const ViewApplication = () => {
   const { job_id } = useParams();
   const application = useLoaderData();

   return (
      <div className="px-6 py-10">
         <h3 className="text-2xl text-center">
            {application.length} Application for: {job_id}
         </h3>

         {/* Table */}
         <div>
            {application.length ? (
               <div className="overflow-x-auto border border-gray-200 mt-8">
                  <table className="table">
                     {/* head */}
                     <thead className="bg-gray-100">
                        <tr>
                           <th></th>
                           <th>Name</th>
                           <th>Job</th>
                           <th>Favorite Color</th>
                        </tr>
                     </thead>

                     <tbody>
                        {/* Rows */}
                        {application.map((application, index) => (
                           <tr key={application._id} className="hover:bg-gray-50">
                              <th>{index + 1}</th>
                              <td>{application?.applicant}</td>
                              <td>Quality Control Specialist</td>
                              <td>Blue</td>
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

export default ViewApplication;
