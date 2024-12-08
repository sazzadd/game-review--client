import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../Auth/AuthLayout";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import ReviewDetails from "../components/ReviewDetails";
import UpdateReview from "../components/UpdateReview";
import AddReview from "../Pages/AddReview";
import ErrorPage from "../Pages/ErrorPage";
import MyReviews from "../Pages/MyReviews";
import WatchList from "../Pages/WatchList";
import MainLayouts from "./../layouts/MainLayouts";
import AllReviews from "./../Pages/AllReviews";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    loader: () => fetch("https://game-reviw-site.vercel.app/review"),
  },
  {
    path: "/allReviews",
    element: <AllReviews></AllReviews>,
    loader: () => fetch("https://game-reviw-site.vercel.app/review"),
  },
  {
    path: "/ReviewDetail/:_id",
    element: (
      <PrivateRoute>
        <ReviewDetails></ReviewDetails>
      </PrivateRoute>
    ),

    loader: ({ params }) =>
      fetch(`https://game-reviw-site.vercel.app/review/${params._id}`)
        .then((response) => response.json())
        .then((data) => data),
  },

  {
    path: "/addReview",
    element: (
      <PrivateRoute>
        <AddReview></AddReview>
      </PrivateRoute>
    ),
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
    path: "/myReview",
    element: (
      <PrivateRoute>
        <MyReviews></MyReviews>
      </PrivateRoute>
    ),
    loader: () => fetch("https://game-reviw-site.vercel.app/review"),
  },
  {
    path: "/watchList",

    element: (
      <PrivateRoute>
        <WatchList></WatchList>
      </PrivateRoute>
    ),

    loader: () => fetch("https://game-reviw-site.vercel.app/watchList"),
  },
  {
    path: "/updateReview/:_id",
    element: <UpdateReview />,
    loader: ({ params }) =>
      fetch(`https://game-reviw-site.vercel.app/review/${params._id}`),
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
