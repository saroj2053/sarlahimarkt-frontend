import axios from "axios";
import React, { useState } from "react";
import { api, getBearerToken } from "../protocol";

const useProductUpdate = () => {
  const [loading, setLoading] = useState(false);
  const updateProduct = async (productId, data) => {
    setLoading(true);
    try {
      const response = await axios.patch(`${api}/products/${productId}`, data, {
        headers: { Authorization: `Bearer ${getBearerToken()}` },
      });
      return response.data.message;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, updateProduct };
};

export default useProductUpdate;
