import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../Auth/AuthLayout";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import AddReview from "../Pages/AddReview";
import ErrorPage from "../Pages/ErrorPage";
import ReviewDetails from "../components/ReviewDetails";
import MainLayouts from "./../layouts/MainLayouts";
import AllReviews from "./../Pages/AllReviews";
import MyReviews from "../Pages/MyReviews";
import WatchList from "../Pages/WatchList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
  },
  {
    path: "/allReviews",
    element: <AllReviews></AllReviews>,
    loader: () => fetch("http://localhost:5000/review"),
  },
  {
    path: "/ReviewDetail/:_id",
    element: <ReviewDetails></ReviewDetails>,
    // loader: ({ params }) => fetch(`https://coffee-store-server-eight-ashy.vercel.app/coffee/${params.id}`),
    loader: ({ params }) =>
      fetch(`http://localhost:5000/review/${params._id}`)
        .then((response) => response.json())
        .then((data) => data),
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
    path: "/myReview",
    element: <MyReviews></MyReviews>,
  },
  {
    path: "/watchList",
    element: <WatchList></WatchList>,
    loader: () => fetch("http://localhost:5000/watchList"),

  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },

]);

export default router;
