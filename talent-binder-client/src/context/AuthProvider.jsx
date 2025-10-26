import axios from "axios";
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
   createUserWithEmailAndPassword,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const signInUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   const googleSignIn = () => {
      setLoading(true);
      signInWithPopup(auth, googleProvider);
   };

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         if (currentUser) {
            setUser(currentUser);
            setLoading(false);
            if (currentUser?.email) {
               const userData = { email: currentUser?.email };
               axios
                  .post(`${import.meta.env.VITE_BASE_URL}/jwt`, userData, {
                     withCredentials: true,
                  })
                  .then((res) => {
                     console.log("Token after jwt", res.data);
                     const token = res.data.token;
                  })
                  .catch((error) => {
                     console.log(error);
                  });
            }
         }
      });

      return () => {
         unSubscribe();
      };
   }, []);

   const signOutUser = () => {
      return signOut(auth);
   };

   const authInfo = {
      user,
      loading,
      createUser,
      signInUser,
      signOutUser,
      googleSignIn,
   };

   return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
