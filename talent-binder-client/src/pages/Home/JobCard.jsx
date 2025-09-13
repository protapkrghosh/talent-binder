import { GrLocation } from "react-icons/gr";
import { WiTime8 } from "react-icons/wi";
import { Link } from "react-router";
import { PiSuitcaseSimple } from "react-icons/pi";

const JobCard = ({ job }) => {
   const {
      _id,
      title,
      location,
      jobType,
      category,
      salaryRange,
      requirements,
      description,
      company,
      company_logo,
   } = job;

   return (
      <div className="w-full bg-[#F8FAFF] hover:bg-white border border-[#e4e6eb] hover:border-[#b1bfdfad] hover:-translate-y-1.5 hover:shadow duration-300 rounded-lg p-5 group">
         {/* Image */}
         <div className="flex items-center justify-between w-full">
            <img
               src={company_logo}
               alt="Job Banner"
               className="rounded-t-lg w-16 h-16"
            />

            <div>
               <h3 className="text-lg font-bold">{company}</h3>
               <span className="flex items-center gap-1 text-accent text-[14px]">
                  <GrLocation size={14} /> {location}
               </span>
            </div>
         </div>

         {/* Card Body */}
         <div className="card-body p-0 mt-3">
            {/* Title + Meta */}
            <Link
               to={"/"}
               className="card-title text-xl hover:text-primary font-bold text-neutral duration-300 w-fit"
            >
               {title}
            </Link>

            <div className="flex items-center text-sm text-gray-500 gap-4">
               <span className="flex items-center gap-1">
                  <GrLocation size={17} /> {location}
               </span>
               <span className="flex items-center gap-1">
                  <PiSuitcaseSimple size={18} /> {jobType}
               </span>
            </div>

            {/* Skills and Price */}
            <div>
               <div className="my-3">
                  {requirements.map((skill, index) => (
                     <span
                        key={index}
                        className="badge mr-3 mb-3 py-4 text-[13px] text-accent bg-[#EFF3FC]"
                     >
                        {skill}
                     </span>
                  ))}
               </div>

               {/* Description */}
               <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3">
                  {description}
               </p>

               <div className="flex justify-between items-center">
                  <p className="text-accent font-bold text-md">
                     <span className="text-secondary">Salary:</span>{" "}
                     {salaryRange?.min} - {salaryRange?.max}
                     <span className="text-sm font-medium uppercase text-gray-500">
                        {" "}
                        {salaryRange?.currency}
                     </span>
                  </p>

                  <Link to={`/jobs/${_id}`}>
                     <button className="btn btn-sm text-primary font-normal bg-[#E0E6F7] group-hover:bg-primary group-hover:text-white duration-500">
                        Apply Now
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default JobCard;
