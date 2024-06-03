import axios from "axios";
import React, { useState } from "react";
import { api, getBearerToken } from "../protocol";
import toast from "react-hot-toast";

const useFetchWishlistItems = () => {
  const [loading, setLoading] = useState(false);

  const fetchWishlists = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${api}/wishlist`, {
        headers: { Authorization: `Bearer ${getBearerToken()}` },
      });
      return response.data.wishlist.wishlistedProducts;
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, fetchWishlists };
};

export default useFetchWishlistItems;
