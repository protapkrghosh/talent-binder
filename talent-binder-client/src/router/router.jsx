import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Home/Register";
import SignIn from "../pages/Home/SignIn";
import PageNotFound from "../pages/PageNotFound";

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
