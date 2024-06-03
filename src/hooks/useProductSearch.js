import axios from "axios";
import React, { useState } from "react";
import { api } from "../protocol";
import toast from "react-hot-toast";

const useProductSearch = () => {
  const [runningSearch, setRunningSearch] = useState(false);

  const searchProduct = async (searchTerm) => {
    setRunningSearch(false);
    try {
      const response = await axios.post(`${api}/products/search`, {
        searchTerm,
      });
      toast.success(response.data.message);
      return response.data.products;
    } catch (error) {
      console.log(error);
    } finally {
      setRunningSearch(true);
    }
  };
  return { runningSearch, searchProduct };
};

export default useProductSearch;
