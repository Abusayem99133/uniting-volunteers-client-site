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
import BeVolunteer from "../Pages/BeVolunteer";
import ViewDetails from "../Pages/Home/ViewDetails";
import UpdatedPost from "../Pages/UpdatedPost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/volunteerNeeded"),
      },
      {
        path: "/needVolunteer",
        element: (
          <PrivateRoute>
            <NeedVolunteer></NeedVolunteer>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/volunteerNeeded"),
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
        element: (
          <PrivateRoute>
            <MyPost></MyPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/request",
        element: <RequestedPost></RequestedPost>,
        loader: () => fetch("http://localhost:5000/reqCollection"),
      },
      {
        path: "/beVolunteer/:id",
        element: <BeVolunteer></BeVolunteer>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/volunteerNeeded/${params.id}`),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/volunteerNeeded/${params.id}`),
      },
      {
        path: "/updated/:id",
        element: <UpdatedPost></UpdatedPost>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/volunteerNeeded/${params.id}`),
      },
    ],
  },
]);
