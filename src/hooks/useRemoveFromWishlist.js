import axios from "axios";
import { api, getBearerToken } from "../protocol";
import { useState } from "react";

const useRemoveFromWishlist = () => {
  const [loading, setLoading] = useState(false);
  const removeFromWishlist = async (prodId) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${api}/wishlist/delete`,
        { productId: prodId },
        {
          headers: { Authorization: `Bearer ${getBearerToken()}` },
        }
      );
      return response.data.wishlist.wishlistedProducts;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, removeFromWishlist };
};

export default useRemoveFromWishlist;
