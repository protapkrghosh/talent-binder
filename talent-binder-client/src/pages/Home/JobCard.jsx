import { GrLocation } from "react-icons/gr";
import { WiTime8 } from "react-icons/wi";
import { Link } from "react-router";

const JobCard = ({ job }) => {
   const {
      title,
      location,
      jobType,
      category,
      description,
      company,
      company_logo,
   } = job;

   return (
      <div className="w-full bg-[#F8FAFF] hover:bg-white border border-[#e4e6eb] hover:border-[#b1bfdfad] hover:-translate-y-1.5 hover:shadow duration-300 rounded-lg p-5">
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
                  <WiTime8 size={18} /> 3 mins ago
               </span>
            </div>

            {/* Skills and Price */}
            <div className="flex justify-between items-center mt-3">
               <div className="flex gap-2">
                  <span className="badge py-4 text-[13px] text-accent bg-[#EFF3FC]">
                     Figma
                  </span>
                  <span className="badge py-4 text-[13px] text-accent bg-[#EFF3FC]">
                     Adobe XD
                  </span>
               </div>

               <p className="text-end text-primary font-bold text-lg">
                  $90 - $120
                  <span className="text-sm font-medium text-gray-500">
                     {" "}
                     /Hour
                  </span>
               </p>
            </div>

            {/* Description */}
            <p className="text-gray-600 mt-3 text-sm leading-relaxed line-clamp-3">
               {description}
            </p>
         </div>
      </div>
   );
};

export default JobCard;
