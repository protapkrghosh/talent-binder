import { Link } from "react-router";
import img from "../assets/404.svg";

const PageNotFound = () => {
   return (
      <div className="text-center my-20">
         <img src={img} alt="Image" className="w-1/4 mx-auto" />
         <div>
            <h3 className="text-4xl font-extrabold text-secondary mt-16 mb-2">
               Something Went Wrong!
            </h3>
            <p className="text-accent pb-10">
               Sorry, but we are unable to open this page.
            </p>
            <Link to={"/"} className="hover:text-primary duration-300">
               Back To Homepage
            </Link>
         </div>
      </div>
   );
};

export default PageNotFound;
