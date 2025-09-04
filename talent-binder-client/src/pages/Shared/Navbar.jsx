import { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import logo from "../../assets/logo.png";

const Navbar = () => {
   const { user, signOutUser } = useContext(AuthContext);

   const handleSignOut = () => {
      signOutUser()
         .then(() => {
            toast.success("Sign out successful");
         })
         .catch((error) => toast.error(error.code));
   };

   const links = (
      <>
         <NavLink to={"/"}>Home</NavLink>
         <NavLink to={"/"}>Find a Job</NavLink>
         <NavLink to={"/"}>Recruiter</NavLink>
         <NavLink to={"/"}>Candidates</NavLink>
      </>
   );

   return (
      <div className="navbar bg-base-100 px-12 py-4 sticky top-0">
         <div className="navbar-start">
            <div className="dropdown">
               <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     {" "}
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />{" "}
                  </svg>
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-6"
               >
                  {links}
               </ul>
            </div>

            <NavLink to={"/"} className="flex items-center">
               <img src={logo} alt="Talent Binder" className="w-[45px] mr-2" />
               <h4 className="text-xl font-extrabold">Talent Binder</h4>
            </NavLink>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-6">{links}</ul>
         </div>
         <div className="navbar-end">
            {user ? (
               <>
                  <h5 className="capitalize mr-3 font-semibold">
                     {user?.displayName}
                  </h5>
                  <button
                     onClick={handleSignOut}
                     className="btn btn-sm cursor-pointer"
                  >
                     Sign Out
                  </button>
               </>
            ) : (
               <NavLink to={"/register"} className={"btn btn-sm"}>
                  Register
               </NavLink>
            )}
         </div>
      </div>
   );
};

export default Navbar;
