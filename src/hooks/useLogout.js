import axios from "axios";
import React, { useState } from "react";
import { api, getBearerToken } from "../protocol";
import { useDispatch } from "react-redux";
import { logoutUser } from "../features/user/userSlice";
import toast from "react-hot-toast";

const useLogout = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const logout = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${api}/users/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${getBearerToken()}`,
          },
        }
      );

      console.log(response);

      dispatch(logoutUser());

      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, logout };
};

export default useLogout;
