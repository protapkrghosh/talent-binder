import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

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

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         if (currentUser) {
            setUser(currentUser);
            setLoading(false);
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
   };

   return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
