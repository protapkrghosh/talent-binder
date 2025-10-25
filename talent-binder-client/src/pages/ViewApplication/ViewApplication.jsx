import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router";

const ViewApplication = () => {
   const { job_id } = useParams();
   const application = useLoaderData();

   const handleStatusChange = (e, app_id) => {
      // console.log(e.target.value, application);

      axios
         .patch(`${import.meta.env.VITE_BASE_URL}/applications/${app_id}`, {
            status: e.target.value,
         })
         .then((res) => {
            if (res.data.modifiedCount) {
               toast.success("Application status updated");
            }
         })
         .catch((error) => {
            console.log(error);
         });
   };

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
                           <th>Status</th>
                        </tr>
                     </thead>

                     <tbody>
                        {/* Rows */}
                        {application.map((application, index) => (
                           <tr
                              key={application._id}
                              className="hover:bg-gray-50"
                           >
                              <th>{index + 1}</th>
                              <td>{application?.applicant}</td>
                              <td>Quality Control Specialist</td>
                              <td>
                                 <select
                                    onChange={(e) =>
                                       handleStatusChange(e, application._id)
                                    }
                                    defaultValue={application?.status}
                                    className="select focus-within:outline-0 w-38"
                                 >
                                    <option disabled={true}>
                                       Update Status
                                    </option>
                                    <option>Pending</option>
                                    <option>Interview</option>
                                    <option>hired</option>
                                    <option>Rejected</option>
                                 </select>
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

export default ViewApplication;
