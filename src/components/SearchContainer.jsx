import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchContainer = () => {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");

  const handleSearch = async (evt) => {
    evt.preventDefault();
    if (searchInput.trim().length < 1) {
      navigate("/");
    } else {
      navigate(`/product/search/${searchInput}`);
    }
  };
  return (
    <form onSubmit={handleSearch} className="w-[30%]">
      <div className=" w-full hidden lg:flex lg:items-center rounded-full focus-within:shadow-md">
        <input
          className="py-2.5 pl-8 pr-4 border text-slate-800 border-slate-200 rounded-l-full  w-full focus:outline-none font-nunito"
          type="text"
          name="search_product"
          placeholder="Search for product here..."
          value={searchInput}
          onChange={(evt) => setSearchInput(evt.target.value)}
        />
        <div
          className="text-lg py-3.5 px-5 bg-gradient-to-t from-primary-red to-primary-yellow text-white rounded-r-full cursor-pointer"
          onClick={handleSearch}
        >
          <FaSearch />
        </div>
      </div>
    </form>
  );
};

export default SearchContainer;
