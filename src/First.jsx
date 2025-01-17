import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const First = () => {
  return (
    <>
    <Header />
    <Outlet />
    </>
  );
};

export default First;
