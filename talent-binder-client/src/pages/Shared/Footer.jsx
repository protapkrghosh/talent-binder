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
            <div>
               <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-600 rotate-45"></div>
                  <span className="text-xl font-bold text-blue-800">
                     JobBox
                  </span>
               </div>
               <p className="mt-4 text-sm text-gray-500">
                  JobBox is the heart of the design community and the best
                  resource to discover and connect with designers and jobs
                  worldwide.
               </p>

               <div className="flex space-x-3 mt-4 text-blue-600 text-lg">
                  <a href="#">
                     <FaFacebook />
                  </a>
                  <a href="#">
                     <FaTwitter />
                  </a>
                  <a href="#">
                     <FaLinkedin />
                  </a>
               </div>
            </div>

            {/* Links Section */}
            {Object.entries(footerLinks).map(([title, links]) => (
               <div key={title}>
                  <h6 className="footer-title font-semibold mb-3">{title}</h6>
                  <ul className="space-y-2">
                     {links.map((link) => (
                        <li key={link}>
                           <a href="#" className="link link-hover text-sm">
                              {link}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>
            ))}

            {/* Download App */}
            {/* <div>
               <h6 className="footer-title font-semibold mb-3">Download App</h6>
               <p className="text-sm text-gray-500 mb-3">
                  Download our Apps and get extra 15% Discount on your first
                  Order...!
               </p>
               <div className="flex flex-col space-y-2">
                  <a href="#">
                     <img
                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                        alt="App Store"
                        className="h-10"
                     />
                  </a>
                  <a href="#">
                     <img
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                        alt="Google Play"
                        className="h-10"
                     />
                  </a>
               </div>
            </div> */}
         </div>

         {/* Bottom Bar */}
         <div className="mt-10 border-t pt-4 text-center md:flex md:items-center md:justify-between text-sm text-gray-500">
            <p>Copyright © 2022. JobBox all rights reserved</p>
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
