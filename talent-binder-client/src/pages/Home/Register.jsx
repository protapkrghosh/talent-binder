import Lottie from "lottie-react";
import register from "./register.json";
import { Link, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import SocialLogin from "../Shared/SocialLogin";
import useAuth from "../../hooks/useAuth";

const Register = () => {
   const { createUser } = useAuth();
   const location = useLocation();
   const navigate = useNavigate();
   const from = location.state || "/";

   const handleRegister = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      // Create user
      createUser(email, password)
         .then((result) => {
            const name = email.split("@")[0];
            updateProfile(auth.currentUser, {
               displayName: name,
            })
               .then(() => {
                  navigate(from);
                  toast.success("Register Successfully");
               })
               .catch((error) => toast.error(error.code));
         })
         .catch((error) => {
            toast.error(error.code);
            console.log(error);
         });
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
               <p className="text-accent mb-7">
                  Access to all features. No credit card required.
               </p>

               <SocialLogin from={from} />
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

                  <button className="btn btn-secondary text-white py-6 mt-4 mb-2">
                     Register
                  </button>

                  <div>
                     <h5 className="text-accent">
                        Already have an account?{" "}
                        <Link
                           to={"/signin"}
                           className="text-secondary hover:text-primary duration-200"
                        >
                           Sign In
                        </Link>
                     </h5>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Register;
