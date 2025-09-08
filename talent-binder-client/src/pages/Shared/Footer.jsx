import logo from "../../assets/logo.png";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
   // Footer link data
   const footerLinks = {
      Resources: ["About us", "Our Team", "Products", "Contact"],
      Community: ["Feature", "Pricing", "Credit", "FAQ"],
      "Quick links": ["iOS", "Android", "Microsoft", "Desktop"],
      More: ["Privacy", "Help", "Terms", "FAQ"],
   };
   return (
      <footer className="bg-base-100 border-t border-gray-200 px-6 py-10 w-full">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-5">
            {/* Brand Section */}
            <div className="w-full">
               <div className="flex items-center space-x-2">
                  <img
                     src={logo}
                     alt="Talent Binder"
                     className="w-[45px] mr-2"
                  />
                  <span className="text-xl font-bold text-secondary">
                     Talent Binder
                  </span>
               </div>
               <p className="mt-4 text-[12px] text-accent font-medium">
                  Talent Binder is the heart of the design community and the
                  best resource to discover and connect with designers and jobs
                  worldwide.
               </p>

               <div className="flex space-x-4 mt-4 text-primary text-lg">
                  <a href="#" className="hover:scale-110 duration-300">
                     <FaFacebook size={22} />
                  </a>
                  <a href="#" className="hover:scale-110 duration-300">
                     <FaTwitter size={22} />
                  </a>
                  <a href="#" className="hover:scale-110 duration-300">
                     <FaLinkedin size={22} />
                  </a>
               </div>
            </div>

            {/* Links Section */}
            {Object.entries(footerLinks).map(([title, links]) => (
               <div key={title} className="mx-auto">
                  <h6 className="uppercase text-[15px] text-secondary font-semibold mb-3">
                     {title}
                  </h6>
                  <ul className="space-y-2 text-accent">
                     {links.map((link) => (
                        <li key={link}>
                           <a
                              href="#"
                              className="hover:pl-1 text-sm duration-300"
                           >
                              {link}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>
            ))}
         </div>

         {/* Bottom Bar */}
         <div className="mt-10 border-t border-gray-200 pt-4 text-center md:flex md:items-center md:justify-between text-sm text-accent">
            <p>
               Copyright © {new Date().getFullYear()}. Talent Binder all rights
               reserved
            </p>
            <div className="flex justify-center md:justify-end space-x-4 mt-2 md:mt-0">
               <a href="#">Privacy Policy</a>
               <a href="#">Terms & Conditions</a>
               <a href="#">Security</a>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
