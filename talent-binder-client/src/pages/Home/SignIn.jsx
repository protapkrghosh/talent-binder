import { Link, useLocation, useNavigate } from "react-router";
import login from "./login.json";
import Lottie from "lottie-react";
import toast from "react-hot-toast";
import SocialLogin from "../Shared/SocialLogin";
import useAuth from "../../hooks/useAuth";

const SignIn = () => {
   const { signInUser } = useAuth();
   const location = useLocation();
   const navigate = useNavigate();
   const from = location.state || "/";

   const handleSignIn = (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const email = formData.get("email");
      const password = formData.get("password");

      signInUser(email, password)
         .then((result) => {
            navigate(from);
            toast.success("Sign in successfully");
         })
         .catch((error) => console.log(error));
   };

   return (
      <div className="md:flex justify-around items-center py-16">
         <div className="hidden md:block">
            <Lottie animationData={login} loop={true} />
         </div>

         {/* Sign in form */}
         <div className="flex flex-col justify-center items-center text-center">
            <div className="w-md">
               <h5 className="text-primary">Welcome back!</h5>
               <h1 className="text-secondary text-4xl font-bold my-2">
                  Member Login
               </h1>
               <p className="text-accent mb-7">
                  Access to all features. No credit card required.
               </p>

               <SocialLogin from={from} />
            </div>

            <div>
               <form
                  onSubmit={handleSignIn}
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
                     Sign In
                  </button>

                  <div>
                     <h5 className="text-accent">
                        Don't have an Account?{" "}
                        <Link
                           to={"/register"}
                           className="text-secondary hover:text-primary duration-200"
                        >
                           Sign up
                        </Link>
                     </h5>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default SignIn;
