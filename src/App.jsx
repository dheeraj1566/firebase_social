import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import First from "./First";
import ProfileEdit from "./components/ProfileEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <First />, 
    children: [
      {
        index:true,
        element: (
         <ProtectedRoute>
          <Home />
         </ProtectedRoute>
        ),
      },
      {
        path: "/login", 
        element:
          <Login />
      },
      {
        path: "/profile/edit", 
        element:
          <ProfileEdit />
      },
      {
        path:"/register",
        element:<Register />
      },
      {
        path:"/register",
        element:(
        <ProtectedRoute>
          <Register />
        </ProtectedRoute>)
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
