import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";

const Protected = ({ children }) => {
  const authUser = useSelector(selectUser);

  console.log(authUser);

  if (!authUser?.token) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default Protected;
