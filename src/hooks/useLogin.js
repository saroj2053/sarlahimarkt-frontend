import React, { useState } from "react";
import axios from "axios";

import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";
import { api } from "../protocol";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const login = async (userCredentials) => {
    setLoading(true);
    try {
      const response = await axios.post(`${api}/users/login`, userCredentials);

      dispatch(setUser(response.data.data));

      toast.success(response.data.message);
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data?.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;
