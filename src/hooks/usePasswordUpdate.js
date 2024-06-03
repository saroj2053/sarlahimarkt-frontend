import axios from "axios";
import React, { useState } from "react";
import { api, getBearerToken } from "../protocol";
import toast from "react-hot-toast";

const usePasswordUpdate = () => {
  const [loading, setLoading] = useState(false);
  const updatePassword = async (passwordCredentials) => {
    setLoading(true);
    try {
      const response = await axios.patch(
        `${api}/users/password/update`,
        passwordCredentials,
        {
          headers: {
            Authorization: `Bearer ${getBearerToken()}`,
          },
        }
      );

      toast.success(response.data.message);
      return true;
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data);
      return false;
    } finally {
      setLoading(false);
    }
  };
  return { loading, updatePassword };
};

export default usePasswordUpdate;
