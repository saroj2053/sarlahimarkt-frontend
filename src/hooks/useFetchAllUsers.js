import axios from "axios";
import React, { useState } from "react";
import { api, getBearerToken } from "../protocol";

const useFetchAllUsers = () => {
  const [loading, setLoading] = useState(false);
  const fetchAllUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${api}/users/allUsers`, {
        headers: { Authorization: `Bearer ${getBearerToken()}` },
      });
      return response.data.users;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, fetchAllUsers };
};

export default useFetchAllUsers;
