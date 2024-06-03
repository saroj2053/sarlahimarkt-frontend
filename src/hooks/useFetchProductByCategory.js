import axios from "axios";
import React, { useState } from "react";
import { api } from "../protocol";

const useFetchProductByCategory = () => {
  const [loading, setLoading] = useState(false);
  const fetchProductsByCategory = async (category) => {
    setLoading(true);
    try {
      const response = await axios.post(`${api}/products/category`, {
        category,
      });

      return response.data?.products;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, fetchProductsByCategory };
};

export default useFetchProductByCategory;
