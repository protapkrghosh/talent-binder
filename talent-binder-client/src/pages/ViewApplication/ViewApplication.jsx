import { useParams } from "react-router";

const ViewApplication = () => {
   const { job_id } = useParams();

   return (
      <div className="px-6 py-10">
         <h3 className="text-2xl text-center">Application for: {job_id}</h3>
      </div>
   );
};

export default ViewApplication;
