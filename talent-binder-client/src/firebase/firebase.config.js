import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
   apiKey: import.meta.env.VITE_TALENT_APIKEY,
   authDomain: import.meta.env.VITE_TALENT_AUTHDOMAIN,
   projectId: import.meta.env.VITE_TALENT_PROJECTID,
   storageBucket: import.meta.env.VITE_TALENT_STORAGEBUCKET,
   messagingSenderId: import.meta.env.VITE_TALENT_MESSAGINGSENDERID,
   appId: import.meta.envVITE_TALENT_APPID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

