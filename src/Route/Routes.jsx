import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Shared/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddVolunteerPost from "../Pages/MyProfile/AddPost/AddVolunteerPost";
import MyPost from "../Pages/MyProfile/MyPost";
import RequestedPost from "../Pages/MyProfile/RequestedPost";
import PrivateRoute from "../Shared/PrivateRoute";
import NeedVolunteer from "../Pages/NeedVolunteer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/needVolunteer",
        element: (
          <PrivateRoute>
            <NeedVolunteer></NeedVolunteer>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addPost",
        element: (
          <PrivateRoute>
            {" "}
            <AddVolunteerPost></AddVolunteerPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/myPost",
        element: <MyPost></MyPost>,
      },
      {
        path: "/request",
        element: <RequestedPost></RequestedPost>,
      },
    ],
  },
]);
