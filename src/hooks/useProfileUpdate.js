import React, { useState } from "react";
import { api, getBearerToken } from "../protocol";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";
import toast from "react-hot-toast";

const useProfileUpdate = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const updateProfile = async (data) => {
    setLoading(true);
    try {
      const response = await axios.patch(`${api}/users/profile/update`, data, {
        headers: {
          Authorization: `Bearer ${getBearerToken()}`,
        },
      });

      dispatch(setUser(response.data.data));
      toast.success(response.data.message);
      return true;
    } catch (error) {
      toast.error(error.response.data.message);
      return false;
    } finally {
      setLoading(false);
    }
  };
  return { loading, updateProfile };
};

export default useProfileUpdate;
