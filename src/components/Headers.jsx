import React from "react";
import { useSelector } from "react-redux";

function Headers() {
  const { user_token, isLoading, isError, isSuccess, message, user } =
    useSelector((state) => state.auth);
  return (
    <>
      <nav className="navbar  is-flex is-justify-content-space-between is-align-items-center px-6 py-4">
        <div className="nav-logo title is-4 mb-0">ABC COMPANY</div>
        <div>{user && user.full_name}</div>
      </nav>
    </>
  );
}

export default Headers;
