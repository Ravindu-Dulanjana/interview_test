import React from "react";
import Headers from "../components/Headers";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function UserLayout() {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
}

export default UserLayout;
