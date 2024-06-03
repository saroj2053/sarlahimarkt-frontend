import axios from "axios";
import React, { useState } from "react";
import { api } from "../protocol";

const useFetchProducts = () => {
  const [loading, setLoading] = useState(false);
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${api}/products`);
      return response.data.products;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, fetchProducts };
};

export default useFetchProducts;
