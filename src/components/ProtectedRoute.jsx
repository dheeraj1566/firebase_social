import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

const ProtectedRoute = ({ children }) => {
  const {user, loading} = useAuth();

  if (loading){
    return <div>loading...</div>;
  }
  if (!user) {
    return (<Navigate to="./login"/>)  
  }
  return children;
};

export default ProtectedRoute;
