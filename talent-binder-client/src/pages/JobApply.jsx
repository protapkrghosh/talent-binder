import { Link, useParams } from "react-router";
import useAuth from "../hooks/useAuth";
import { FaCloudUploadAlt } from "react-icons/fa";

const JobApply = () => {
   const { id: jobId } = useParams();
   const { user } = useAuth();

   const handleApply = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const phone = form.phone.value;
      const linkedin = form.linkedin.value;
      const github = form.github.value;
      const description = form.description.value;
      console.log({ name, email, phone, linkedin, github, description });
   };

   return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12">
         <div className="card w-full max-w-xl bg-white border border-blue-100 p-8 rounded-lg">
            {/* Header */}
            <div className="text-center mb-6">
               <span className="text-accent font-medium badge bg-[#E0E6F7] py-3.5 mb-3">
                  Job Application
               </span>
               <h1 className="text-4xl font-bold text-secondary">
                  Start Your Career Today
               </h1>
               <p className="text-[13px] text-gray-400 mt-2">
                  Please fill in your information and send it to the employer.
               </p>

               <p className="mt-3 italic">
                  Apply for this job:{" "}
                  <span className="text-primary hover:underline">
                     <Link to={`/jobs/${jobId}`}>Details</Link>
                  </span>
               </p>
            </div>

            {/* Form */}
            <form onSubmit={handleApply} className="space-y-4">
               {/* Name */}
               <div>
                  <label className="label mb-1">
                     <span className="text-secondary text-[15px]">
                        Full Name *
                     </span>
                  </label>
                  <input
                     type="text"
                     name="name"
                     placeholder="Kuame Albert"
                     required
                     className=" input input-bordered w-full py-5.5 focus-within:outline-0 focus:border-primary"
                  />
               </div>

               {/* Email */}
               <div>
                  <label className="label mb-1">
                     <span className="text-secondary text-[15px]">Email *</span>
                  </label>
                  <input
                     type="email"
                     name="email"
                     placeholder="danielthomas@gmail.com"
                     required
                     className=" input input-bordered w-full py-5.5 focus-within:outline-0 focus:border-primary"
                  />
               </div>

               {/* Phone */}
               <div>
                  <label className="label mb-1">
                     <span className="text-secondary text-[15px]">
                        Contact Number *
                     </span>
                  </label>
                  <input
                     type="tel"
                     name="phone"
                     placeholder="(+01) 234 567 89"
                     className=" input input-bordered w-full py-5.5 focus-within:outline-0 focus:border-primary"
                     required
                  />
               </div>

               {/* Linkedin */}
               <div>
                  <label className="label mb-1">
                     <span className="text-secondary text-[15px]">
                        Linkedin Profile*
                     </span>
                  </label>
                  <input
                     type="url"
                     name="linkedin"
                     placeholder="https://www.linkedin.com/in/kuamealbert"
                     required
                     className=" input input-bordered w-full py-5.5 focus-within:outline-0 focus:border-primary"
                  />
               </div>

               {/* GitHub */}
               <div>
                  <label className="label mb-1">
                     <span className="text-secondary text-[15px]">
                        GitHub Profile*
                     </span>
                  </label>
                  <input
                     type="url"
                     name="github"
                     placeholder="https://github.com/kuamealbert"
                     required
                     className=" input input-bordered w-full py-5.5 focus-within:outline-0 focus:border-primary"
                  />
               </div>

               {/* Resume */}
               <div>
                  <label className="label mb-1">
                     <span className="text-secondary text-[15px]">
                        Resume Link*
                     </span>
                  </label>
                  <input
                     type="url"
                     name="resume"
                     placeholder="https://drive.google.com/file/d/1JkE7DuzUXi35D/view"
                     required
                     className=" input input-bordered w-full py-5.5 focus-within:outline-0 focus:border-primary"
                  />
               </div>

               {/* Description */}
               <div>
                  <label className="label mb-1">
                     <span className="text-secondary text-[15px]">
                        Description
                     </span>
                  </label>
                  <textarea
                     name="description"
                     placeholder="Tell us why you are a good fit for this job..."
                     className="textarea textarea-bordered w-full focus-within:outline-0 focus:border-primary"
                     rows="3"
                     required
                  />
               </div>

               {/* Checkbox */}
               <div className="flex items-center gap-2">
                  <input
                     type="checkbox"
                     name="agree"
                     className="checkbox checkbox-sm checkbox-primary"
                     required
                  />
                  <span className="text-sm text-gray-600">
                     Agree our{" "}
                     <a href="#" className="text-blue-500">
                        terms and policy
                     </a>
                  </span>
               </div>

               {/* Submit */}
               <button type="submit" className="btn btn-primary w-full">
                  Apply Job
               </button>
            </form>
         </div>
      </div>
   );
};

export default JobApply;
