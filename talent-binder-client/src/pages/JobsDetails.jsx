import { RiVerifiedBadgeLine } from "react-icons/ri";
import { PiSuitcaseSimple } from "react-icons/pi";
import { Link, useLoaderData } from "react-router";
import {
   FaMapMarkerAlt,
   FaBriefcase,
   FaRegCalendarAlt,
   FaMoneyBillWave,
   FaEnvelope,
   FaUserTie,
} from "react-icons/fa";

const JobsDetails = () => {
   const job = useLoaderData();
   // console.log(job);

   return (
      <div className="container mx-auto px-4 py-20">
         {/* Job Title */}
         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-dashed border-gray-200 pb-5">
            <div>
               <h1 className="text-2xl font-bold">{job?.title}</h1>
               <p className="text-gray-400 text-[14px] mt-1 flex items-center gap-2">
                  <PiSuitcaseSimple size={16} /> {job?.jobType}
               </p>
            </div>

            <Link
               to={`/job-apply/${job?._id}`}
               className="btn btn-primary font-normal mt-3 md:mt-0"
            >
               <RiVerifiedBadgeLine size={16} /> Apply Now
            </Link>
         </div>

         {/* Job Info + Company */}
         <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Employment Info */}
            <div className="md:col-span-2 card bg-base-100 border border-gray-300 p-6">
               <h2 className="text-lg font-semibold border-b border-gray-200 pb-3 mb-4">
                  Employment Information
               </h2>

               <div className="grid sm:grid-cols-2 gap-y-3">
                  <p className="flex items-center font-medium">
                     <FaBriefcase className="mr-2 text-gray-400" /> Category:{" "}
                     <span className="font-normal text-secondary ml-2">
                        {job?.category}
                     </span>
                  </p>

                  <div className="flex items-center font-medium">
                     <FaMoneyBillWave className="mr-2 text-gray-400" /> Salary:{" "}
                     <p className="font-normal text-secondary ml-2">
                        {job?.salaryRange.min}-{job?.salaryRange.max}{" "}
                        <span className="uppercase ml-1">
                           {job?.salaryRange.currency}
                        </span>
                     </p>
                  </div>

                  <p className="flex items-center font-medium">
                     <FaBriefcase className="mr-2 text-gray-400" /> Job-Type:{" "}
                     <span className="font-normal text-secondary ml-2">
                        {job?.jobType}
                     </span>
                  </p>

                  <p className="flex items-center font-medium">
                     <FaRegCalendarAlt className="mr-2 text-gray-400" />{" "}
                     Deadline:
                     <span className="font-normal text-secondary ml-2">
                        {job?.applicationDeadline}
                     </span>
                  </p>

                  <p className="flex items-center font-medium">
                     <FaMapMarkerAlt className="mr-2 text-gray-400" /> Location:{" "}
                     <span className="font-normal text-secondary ml-2">
                        {job?.location}
                     </span>
                  </p>
               </div>
            </div>

            {/* Company Info */}
            <div className="card bg-base-100 border border-gray-300 p-6">
               <div className="flex items-center gap-4 mb-4">
                  <img
                     src={job?.company_logo}
                     alt={job?.company}
                     className="w-14 h-14 rounded object-contain"
                  />
                  <div>
                     <h2 className="font-semibold">{job?.company}</h2>
                     <p className="text-gray-500 text-sm">{job?.category}</p>
                  </div>
               </div>
               <p className="flex items-center text-sm mb-2">
                  <FaUserTie className="mr-2 text-gray-400" /> {job?.hr_name}
               </p>
               <p className="flex items-center text-sm">
                  <FaEnvelope className="mr-2 text-gray-400" /> {job?.hr_email}
               </p>
            </div>
         </div>

         {/* Description */}
         <div className="prose max-w-none mb-10">
            <h2 className="text-xl font-semibold mb-3">Job Description</h2>
            <p>{job?.description}</p>
         </div>

         {/* Responsibilities */}
         <div className="prose max-w-none mb-10">
            <h2 className="text-xl font-semibold mb-3">Responsibilities</h2>
            <ul className="list-disc ml-5">
               {job?.responsibilities.map((responsibilities, index) => (
                  <li key={index}>{responsibilities}</li>
               ))}
            </ul>
         </div>

         {/* Requirements */}
         <div className="prose max-w-none mb-10">
            <h2 className="text-xl font-semibold mb-3">Requirements</h2>
            <ul className="list-disc ml-5 space-y-2">
               {job?.requirements.map((skills, index) => (
                  <li key={index}>{skills}</li>
               ))}
            </ul>
         </div>

         {/* Action Buttons */}
         <div className="flex gap-4">
            <Link to={`/job-apply/${job?._id}`} className="btn btn-primary">
               Apply Now
            </Link>
            <button className="btn btn-outline">Save Job</button>
         </div>
      </div>
   );
};

export default JobsDetails;
