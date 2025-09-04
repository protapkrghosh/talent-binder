import { motion } from "motion/react";
import banner from "../../assets/banner.png";

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
               <h1 className="mb-5 text-[42px] font-bold max-w-[540px] mx-auto">
                  The #1 <span className="text-[#85FF83]">Job Board for </span>
                  Hiring or Find your next job
               </h1>
               <p className="text-lg mb-5">
                  Each month, more than 3 million job seekers turn to website in
                  their search for work, making over 140,000 applications every
                  single day
               </p>
               <button className="btn btn-primary">Get Started</button>
            </div>
         </div>
      </div>
   );
};

export default Banner;
