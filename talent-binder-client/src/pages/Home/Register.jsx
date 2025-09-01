import Lottie from "lottie-react";
import register from "./register.json";

const Register = () => {
   const handleRegister = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
   };

   return (
      <div className="md:flex justify-around items-center py-16">
         <div className="hidden md:block">
            <Lottie animationData={register} loop={true} />
         </div>

         {/* Register form */}
         <div className="flex flex-col justify-center items-center text-center">
            <div className="w-md">
               <h5 className="text-primary">Register</h5>
               <h1 className="text-secondary text-4xl font-bold my-2">
                  Start for free Today
               </h1>
               <p className="text-accent">
                  Access to all features. No credit card required.
               </p>

               <button className="btn bg-white text-black border-[#e5e5e5] w-md py-6 my-7 hover:text-primary hover:shadow duration-300">
                  <svg
                     aria-label="Google logo"
                     width="24"
                     height="24"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 512 512"
                  >
                     <g>
                        <path d="m0 0H512V512H0" fill="#fff"></path>
                        <path
                           fill="#34a853"
                           d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                        ></path>
                        <path
                           fill="#4285f4"
                           d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                        ></path>
                        <path
                           fill="#fbbc02"
                           d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                        ></path>
                        <path
                           fill="#ea4335"
                           d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                        ></path>
                     </g>
                  </svg>
                  Login with Google
               </button>

               <div className="divider w-full mt-0">Or continue with</div>
            </div>

            <div>
               <form
                  onSubmit={handleRegister}
                  className="fieldset border-base-300 rounded-box w-md"
               >
                  <label className="label text-secondary text-[14px]">
                     Email *
                  </label>
                  <input
                     type="email"
                     name="email"
                     placeholder="danielthomas@gmail.com"
                     required
                     className="input w-full focus-within:border-primary focus-visible:outline-0 py-6 mb-3"
                  />

                  <label className="label text-secondary text-[14px]">
                     Password *
                  </label>
                  <input
                     type="password"
                     name="password"
                     placeholder="**********"
                     required
                     className="input w-full focus-within:border-primary focus-visible:outline-0 py-6 mb-3"
                  />

                  <button className="btn btn-secondary text-white py-6 mt-4">
                     Register
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Register;
