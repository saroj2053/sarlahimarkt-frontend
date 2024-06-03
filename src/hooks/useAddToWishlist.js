import axios from "axios";
import React, { useState } from "react";
import { api, getBearerToken } from "../protocol";
import toast from "react-hot-toast";

const useAddToWishlist = () => {
  const [loading, setLoading] = useState(false);

  const addToWishlist = async (productId) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${api}/wishlist`,
        { productId: productId },
        {
          headers: { Authorization: `Bearer ${getBearerToken()}` },
        }
      );
      toast.success(response.data.message);
      return true;
    } catch (error) {
      console.log(error.message);
      toast.error(error.response.data.message);
      return false;
    } finally {
      setLoading(false);
    }
  };
  return { loading, addToWishlist };
};

export default useAddToWishlist;
