import axios from "axios";

export const jobsCreatedByPromise = async (email) => {
   return axios
      .get(`${import.meta.env.VITE_BASE_URL}/jobs/applications?email=${email}`)
      .then((res) => {
         return res.data;
      })
      .catch((error) => {
         console.log(error);
         return [];
      });
};
