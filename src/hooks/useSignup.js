import axios from "axios";
import React, { useState } from "react";
import { api } from "../protocol";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const signup = async (credentials) => {
    setLoading(true);
    try {
      const response = await axios.post(`${api}/users/register`, credentials);
      dispatch(setUser(response.data.data));
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;
