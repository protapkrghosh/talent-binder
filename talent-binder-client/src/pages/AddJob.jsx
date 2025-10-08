import React from "react";

const AddJob = () => {
   const handleAddAJob = (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      console.log(data);
   };

   return (
      <div className="my-10">
         <form onSubmit={handleAddAJob}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border mx-auto p-4">
               <legend className="fieldset-legend">Job Information</legend>

               {/* Job Information */}
               <label className="label">Job Title</label>
               <input
                  type="text"
                  name="job_title"
                  className="input w-full focus-within:outline-0 focus:border-primary"
                  placeholder="Job Title"
               />

               <label className="label">Company Name</label>
               <input
                  type="text"
                  name="company_name"
                  className="input w-full focus-within:outline-0 focus:border-primary"
                  placeholder="company Name"
               />

               <label className="label">Company Location</label>
               <input
                  type="text"
                  name="company_location"
                  className="input w-full focus-within:outline-0 focus:border-primary"
                  placeholder="Company Location"
               />

               <label className="label">Company Logo</label>
               <input
                  type="text"
                  name="company_logo"
                  className="input w-full focus-within:outline-0 focus:border-primary"
                  placeholder="Company Logo URL"
               />

               {/* Job Type */}
               <div className="space-x-2 my-3">
                  <label className="label w-full mb-2">Job Type</label>

                  <input
                     className="btn bg-blue-50 border-blue-200 
               aria-checked:bg-blue-500 aria-checked:text-white 
               checked:bg-blue-500 checked:text-white checked:border-blue-500"
                     type="checkbox"
                     name="onsite"
                     aria-label="On-Site"
                  />

                  <input
                     className="btn bg-blue-50 border-blue-200 
               checked:bg-blue-500 checked:text-white checked:border-blue-500"
                     type="checkbox"
                     name="remote"
                     aria-label="Remote"
                  />

                  <input
                     className="btn bg-blue-50 border-blue-200 
               checked:bg-blue-500 checked:text-white checked:border-blue-500"
                     type="checkbox"
                     name="hybrid"
                     aria-label="Hybrid"
                  />

                  <input
                     className="btn btn-square bg-red-50 border-red-200"
                     type="reset"
                     value="×"
                  />
               </div>

               {/* Job Category */}
               <label className="label">Job Category</label>
               <select
                  defaultValue="Pick a Job Category"
                  className="select w-full focus-within:outline-0 focus:border-primary"
               >
                  <option disabled={true}>Job Category</option>
                  <option>Engineering</option>
                  <option>Marketing</option>
                  <option>Finance</option>
               </select>

               {/* Application Dateline */}
               <label className="label mt-3">Application Dateline</label>
               <input
                  type="date"
                  name="date"
                  id="date"
                  className="focus-within:outline-0 focus:border-primary border border-[#D1D1D1] bg-white rounded-sm py-2.5 px-3"
               />

               {/* Salary Range */}
               <label className="label mt-3">Salary Range</label>
               <div className="join">
                  <input
                     type="text"
                     name="min"
                     className="input join-item focus-within:outline-0 focus:border-primary"
                     placeholder="Min"
                  />

                  <input
                     type="text"
                     name="max"
                     className="input join-item focus-within:outline-0 focus:border-primary"
                     placeholder="Max"
                  />

                  <select
                     name="currency"
                     defaultValue="Select a Currency"
                     className="select focus-within:outline-0 focus:border-primary"
                  >
                     <option disabled={true}>Select a Currency</option>
                     <option>BDT</option>
                     <option>USD</option>
                     <option>EU</option>
                     <option>INR</option>
                     <option>JPY</option>
                     <option>MGA</option>
                  </select>
               </div>

               {/* Job Description */}
               <label className="label mt-3">Job Description</label>
               <textarea
                  className="textarea text-sm w-full focus-within:outline-0 focus:border-primary"
                  placeholder="Write your job description..."
                  name="job_description"
               ></textarea>

               {/* Job Requirements */}
               <label className="label mt-3">Job Requirements</label>
               <textarea
                  className="textarea text-sm w-full focus-within:outline-0 focus:border-primary"
                  placeholder="Write requirements (separate by comma)"
                  name="requirements"
               ></textarea>

               {/* Job Responsibilities */}
               <label className="label mt-3">Job Responsibilities</label>
               <textarea
                  className="textarea text-sm w-full focus-within:outline-0 focus:border-primary"
                  placeholder="Write responsibilities (separate by comma)"
                  name="responsibilities"
               ></textarea>

               {/* HR Information */}
               <label className="label mt-3">HR Name</label>
               <input
                  type="text"
                  name="hr_name"
                  className="input w-full focus-within:outline-0 focus:border-primary"
                  placeholder="Jacob Bell"
               />

               <label className="label mt-3">HR Email</label>
               <input
                  type="text"
                  name="hr_email"
                  className="input w-full focus-within:outline-0 focus:border-primary"
                  placeholder="jacobbell@gmail.com"
               />

               <input
                  type="submit"
                  className="btn btn-primary mt-5 mb-3"
                  value="Add Job"
               />
            </fieldset>
         </form>
      </div>
   );
};

export default AddJob;
