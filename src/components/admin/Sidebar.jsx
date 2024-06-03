import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const authUser = useSelector(selectUser);
  const [showProductOptions, setShowProductOptions] = useState(true);
  const [showUserOptions, setShowUserOptions] = useState(true);
  const [showOrderOptions, setShowOrderOptions] = useState(true);

  const navigate = useNavigate();

  const toggleProductOptionsVisibility = () => {
    setShowProductOptions((prevState) => !prevState);
  };

  const toggleUserOptionsVisibility = () => {
    setShowUserOptions((prevState) => !prevState);
  };

  const toggleOrderOptionsVisibility = () => {
    setShowOrderOptions((prevState) => !prevState);
  };

  return (
    <div className="fixed h-[calc(100vh-272px)] w-72 bg-gradient-to-r from-primary-yellow to-primary-red px-10 py-2 text-white">
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-28 h-28 object-cover rounded-full"
          src={authUser?.user.avatar}
          alt="profile avatar"
        />
        <p className="font-semibold text-md mt-2">{authUser?.user.email}</p>

        <p className="text-sm uppercase font-bold bg-slate-200 text-slate-700 px-4 py-1 rounded-md my-2">
          role: {authUser?.user.role}
        </p>
      </div>
      <ul className="flex flex-col gap-4 font-semibold text-base mt-8">
        <li
          className="uppercase cursor-pointer flex justify-between items-center transition-all duration-500"
          onClick={toggleProductOptionsVisibility}
        >
          Products {showProductOptions ? <FaChevronUp /> : <FaChevronDown />}
        </li>

        {showProductOptions && (
          <ul className="flex flex-col gap-4 font-semibold text-base transition-all duration-700 ease-in-out">
            <li
              className="cursor-pointer transition-all duration-500 hover:translate-x-3 ease-in-out"
              onClick={() => navigate("/admin-dashboard/products")}
            >
              Show All Products
            </li>
            <li
              className="cursor-pointer transition-all duration-500 hover:translate-x-3 ease-in-out"
              onClick={() => navigate("/admin-dashboard/add-new-product")}
            >
              Create New Product
            </li>
          </ul>
        )}

        <li
          className="uppercase cursor-pointer flex justify-between items-center transition-all duration-500"
          onClick={toggleUserOptionsVisibility}
        >
          Users {showUserOptions ? <FaChevronUp /> : <FaChevronDown />}
        </li>

        {showUserOptions && (
          <>
            <li
              className="cursor-pointer transition-all duration-500 hover:translate-x-3 ease-in-out"
              onClick={() => navigate("/admin-dashboard/users")}
            >
              Show All Users
            </li>
          </>
        )}

        <li
          className="uppercase cursor-pointer flex justify-between items-center transition-all duration-500"
          onClick={toggleOrderOptionsVisibility}
        >
          Orders {showOrderOptions ? <FaChevronUp /> : <FaChevronDown />}
        </li>
        {showOrderOptions && (
          <>
            <li className="cursor-pointer transition-all duration-500 hover:translate-x-3 ease-in-out">
              Orders History
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
