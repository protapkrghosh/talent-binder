import { motion } from "motion/react";
import banner from "../../assets/banner.png";
import { GrLocation } from "react-icons/gr";
import { FaBriefcase } from "react-icons/fa6";
import { TiThSmall } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router";
import CountUp from "react-countup";

const Banner = () => {
   return (
      <div
         className="hero min-h-screen"
         style={{
            backgroundImage: `url(${banner})`,
         }}
      >
         <div className="hero-overlay bannerBg"></div>
         <div className="hero-content text-neutral-content text-center">
            <div className="max-w-[690px]">
               <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="mb-5 text-[42px] font-bold max-w-[540px] mx-auto"
               >
                  The #1{" "}
                  <motion.span
                     animate={{
                        color: ["#85FF83", "#4ebb4c", "#85FF83"],
                        transition: { duration: 3, repeat: Infinity },
                     }}
                  >
                     Job Board for{" "}
                  </motion.span>
                  Hiring or Find your next job
               </motion.h1>

               <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="text-lg mt-5 mb-9"
               >
                  Each month, more than 3 million job seekers turn to website in
                  their search for work, making over 140,000 applications every
                  single day
               </motion.p>

               {/* Search area */}
               <div className="w-full flex justify-center">
                  <div className="bg-white shadow-md rounded-xl flex items-center gap-2 px-2 py-3 w-[800px]">
                     {/* Industry */}
                     <div className="flex items-center gap-2 text-accent px-3 border-r">
                        <FaBriefcase className="text-[#a0abb893]" />
                        <select
                           className="select select-ghost w-32 focus:outline-none"
                           defaultValue=""
                        >
                           <option value="" disabled>
                              Industry
                           </option>
                           <option value="Software">Software</option>
                           <option value="Finance">Finance</option>
                           <option value="Recruiting">Recruiting</option>
                           <option value="Development">Development</option>
                           <option value="Management">Management</option>
                           <option value="Advertising">Advertising</option>
                        </select>
                     </div>

                     {/* Location */}
                     <div className="flex items-center gap-2 text-accent px-3 border-r">
                        <GrLocation className="text-[#a0abb893]" />
                        <select className="select select-ghost w-32 focus:outline-none">
                           <option disabled selected>
                              Location
                           </option>
                           <option>Barisal</option>
                           <option>Chattogram</option>
                           <option>Dhaka</option>
                           <option>Khulna</option>
                           <option>Mymensingh</option>
                           <option>Rangpur</option>
                           <option>Sylhet</option>
                        </select>
                     </div>

                     {/* Keyword */}
                     <div className="flex items-center gap-2 px-3 text-accent flex-1">
                        <TiThSmall size={21} className="text-[#a0abb893]" />
                        <input
                           type="text"
                           placeholder="Your keyword..."
                           className="input input-ghost placeholder:text-accent w-full focus:outline-none"
                        />
                     </div>

                     {/* Search Button */}
                     <button className="btn bg-blue-600 text-white p-6 rounded-lg hover:bg-blue-700">
                        <IoSearch size={17} /> Search
                     </button>
                  </div>
               </div>

               {/* Popular Search */}
               <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="text-[14px] space-x-3 mt-5"
               >
                  <span className="font-semibold">Popular Searches: </span>
                  <Link to={"/"} className="underline">
                     Designer
                  </Link>
                  <Link to={"/"} className="underline">
                     Web
                  </Link>
                  <Link to={"/"} className="underline">
                     Developer
                  </Link>
                  <Link to={"/"} className="underline">
                     PHP
                  </Link>
                  <Link to={"/"} className="underline">
                     Senior
                  </Link>
                  <Link to={"/"} className="underline">
                     Engineer
                  </Link>
               </motion.div>

               {/* Counter Progress */}
               <div className="md:flex justify-between mt-14">
                  <div className="text-start">
                     <CountUp
                        end={265}
                        suffix=" K+"
                        duration={2.75}
                        className="text-2xl font-bold"
                     />
                     <p className="text-[14px] text-[#A0ABB8]">
                        Daily Jobs Posted
                     </p>
                  </div>

                  <div className="text-start">
                     <CountUp
                        end={17}
                        suffix=" K+"
                        duration={2.75}
                        className="text-2xl font-bold"
                     />
                     <p className="text-[14px] text-[#A0ABB8]">Recruiters</p>
                  </div>

                  <div className="text-start">
                     <CountUp
                        end={15}
                        suffix=" K+"
                        duration={2.75}
                        className="text-2xl font-bold"
                     />
                     <p className="text-[14px] text-[#A0ABB8]">Freelancers</p>
                  </div>

                  <div className="text-start">
                     <CountUp
                        end={28}
                        suffix=" K+"
                        duration={2.75}
                        className="text-2xl font-bold"
                     />
                     <p className="text-[14px] text-[#A0ABB8]">Blog Tips</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;
