import { LuScanEye } from "react-icons/lu";
import { FaRegTrashCan } from "react-icons/fa6";

const JobApplicationRow = ({ index, application }) => {
   const { title, company, company_logo, applyEmail, name } = application;

   return (
      <>
         {/* row 1 */}
         <tr>
            <th>
               <label>{index + 1}</label>
            </th>
            <td>
               <div className="flex items-center gap-3">
                  <div className="avatar">
                     <div className="mask mask-squircle h-12 w-12">
                        <img src={company_logo} alt="Logo" />
                     </div>
                  </div>
                  <div>
                     <div className="font-bold">{company}</div>
                     <div className="text-sm opacity-50">{title}</div>
                  </div>
               </div>
            </td>
            <td>{name}</td>
            <td>{applyEmail}</td>
            <th className="flex items-center gap-3">
               <div className="text-accent hover:text-primary p-1.5 cursor-pointer group">
                  <LuScanEye
                     size={19}
                     className="group-hover:scale-110 duration-300"
                  />
               </div>

               <div className="text-accent hover:text-red-400 p-1.5 cursor-pointer group">
                  <FaRegTrashCan
                     size={18}
                     className="group-hover:scale-110 duration-300"
                  />
               </div>
            </th>
         </tr>
      </>
   );
};

export default JobApplicationRow;
