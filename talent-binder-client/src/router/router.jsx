import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Home/Register";
import SignIn from "../pages/Home/SignIn";
import PageNotFound from "../pages/PageNotFound";
import JobsDetails from "../pages/JobsDetails";
import JobApply from "../pages/JobApply";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
   {
      path: "/",
      Component: RootLayout,
      children: [
         {
            index: true,
            Component: Home,
         },
         {
            path: "/jobs/:id",
            Component: JobsDetails,
            loader: ({ params }) =>
               fetch(`${import.meta.env.VITE_BASE_URL}/jobs/${params.id}`),
         },
         {
            path: "/job-apply/:id",
            element: (
               <PrivateRoute>
                  <JobApply />
               </PrivateRoute>
            ),
         },
         {
            path: "/register",
            Component: Register,
         },
         {
            path: "/signin",
            Component: SignIn,
         },
         {
            path: "*",
            Component: PageNotFound,
         },
      ],
   },
]);

export default router;
