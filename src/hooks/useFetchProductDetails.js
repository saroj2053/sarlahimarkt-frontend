import axios from "axios";
import React, { useState } from "react";
import { api } from "../protocol";

const useFetchProductDetails = () => {
  const [loading, setLoading] = useState(false);

  const fetchProductDetails = async (productId) => {
    setLoading(true);
    try {
      const response = await axios.get(`${api}/products/${productId}`);
      return response;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, fetchProductDetails };
};

export default useFetchProductDetails;
