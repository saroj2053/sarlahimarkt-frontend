import axios from "axios";
import { api, getBearerToken } from "../protocol";
import { useState } from "react";

const useFetchAddress = () => {
  const [loading, setLoading] = useState(false);
  const fetchAddress = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${api}/users/address`, {
        headers: { Authorization: `Bearer ${getBearerToken()}` },
      });

      return response.data.address;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, fetchAddress };
};

export default useFetchAddress;
