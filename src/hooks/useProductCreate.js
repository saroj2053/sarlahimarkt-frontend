import axios from "axios";
import { api, getBearerToken } from "../protocol";
import { useState } from "react";
import toast from "react-hot-toast";

const useProductCreate = () => {
  const [loading, setLoading] = useState(false);
  const createProduct = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(`${api}/products/new`, data, {
        headers: { Authorization: `Bearer ${getBearerToken()}` },
      });
      console.log(response);
      toast.success(response.data.message);
      return true;
    } catch (error) {
      console.log("error: --> ", error.message);
      toast.error(error.response.data.message);
      return false;
    } finally {
      setLoading(false);
    }
  };
  return { loading, createProduct };
};

export default useProductCreate;
