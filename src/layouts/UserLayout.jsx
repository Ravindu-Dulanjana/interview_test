import React from "react";
import Headers from "../components/Headers";
import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <>
      <Headers />
      <Outlet />
    </>
  );
}

export default UserLayout;
