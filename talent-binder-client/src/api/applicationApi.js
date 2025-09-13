import axios from "axios";

export const myApplicationPromise = async (email) => {
   return axios
      .get(`${import.meta.env.VITE_BASE_URL}/applications?email=${email}`)
      .then((res) => {
         return res.data;
      })
      .catch((error) => {
         console.log(error);
         return [];
      });
};
