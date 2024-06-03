import axios from "axios";
import React, { useState } from "react";
import { api, getBearerToken } from "../protocol";

const useUserRoleUpdate = () => {
  const [loading, setLoading] = useState(false);
  const updateUserRole = async (userId, role) => {
    setLoading(true);
    try {
      const response = await axios.patch(
        `${api}/users/${userId}/update`,
        {
          userId: userId,
          role: role,
        },
        { headers: { Authorization: `Bearer ${getBearerToken()}` } }
      );
      return response.data.message;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, updateUserRole };
};

export default useUserRoleUpdate;
