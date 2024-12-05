import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../Auth/AuthLayout";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import AddReview from "../Pages/AddReview";
import ErrorPage from "../Pages/ErrorPage";
import MainLayouts from "./../layouts/MainLayouts";
import AllReviews from "./../Pages/AllReviews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
  },
  {
    path: "/allReviews",
    element: <AllReviews></AllReviews>,
  },
  {
    path: "/addReview",
    element: <AddReview></AddReview>,
  },

  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "login", // /auth/login path
        element: <Login></Login>,
      },
      {
        path: "register", // /auth/register path
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
